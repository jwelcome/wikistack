const express = require('express')
const router = express.Router()
const {page} = require('../models')
const { wikiPage } = require('../views/wikipage')
const { addPage } = require('../views')

router.use(express.urlencoded({ extended: false }))

router.get('/', (req, res, next) => {
  res.send(wikiPage)
})

router.post('/', (req, res) => {
  res.send('got to POST /wiki/')
})

router.get('/add', (req, res, next) => {
  res.send(addPage())
})

module.exports = router
