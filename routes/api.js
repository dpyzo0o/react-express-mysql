const express = require('express')
const router = express.Router()

router.get('/test', (req, res, next) => {
  const testData = {
    name: 'dpyzo0o',
    age: 24,
    wishList: ['foo', 'bar', 'baz']
  }
  res.json(testData)
})

router.get('/login', (req, res, next) => {
  res.send('Login success.')
})

module.exports = router
