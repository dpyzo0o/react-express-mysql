const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/test', (req, res) => {
  db.query('SELECT * FROM user_collection', (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

router.get('/login', (req, res) => {
  res.send('Login success.')
})

module.exports = router
