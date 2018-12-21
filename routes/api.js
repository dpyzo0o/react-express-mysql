const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mysql = require('mysql')
const router = express.Router()

const db = require('../db')

const saltRounds = 10

router.get('/test', (req, res) => {
  db.query('SELECT id, email, gender, password, permission FROM users', (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

router.get('/checkAuth', (req, res) => {
  const token = req.cookies.token

  if (!token) {
    res.status(401).send('No token provided')
  } else {
    jwt.verify(token, process.env.JWT_ENCRYPTION, (err, decoded) => {
      if (err) {
        res.status(401).send('Unauthorized user')
      } else {
        res.send('Authenticated')
      }
    })
  }
})

router.post('/register', (req, res, next) => {
  const { email, password, gender, permission } = req.body
  bcrypt.hash(password, saltRounds, (err, hashed) => {
    if (err) {
      next(err)
    }

    const values = [[email, hashed, gender, permission]]
    db.query('INSERT INTO users (email, password, gender, permission) VALUES ?', [values], (err, result) => {
      if (err) {
        res.status(409).send('Email already exists')
      }
    })
  })
})

router.post('/authenticate', (req, res, next) => {
  const { email, password } = req.body
  const sql = 'SELECT * FROM users WHERE email = ' + mysql.escape(email)
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (!result.length) {
      res.status(401).send('Incorrect email')
    } else {
      bcrypt.compare(password, result[0].password, (err, same) => {
        if (err) {
          res.status(500).send(err.message)
        } else if (!same) {
          res.status(401).send('Incorrect password')
        } else {
          // issue token
          const payload = { email }
          const token = jwt.sign(payload, process.env.JWT_ENCRYPTION, { expiresIn: process.env.JWT_EXPIRATION })
          res.cookie('token', token, { httpOnly: true }).sendStatus(200)
        }
      })
    }
  })
})

module.exports = router
