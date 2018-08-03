const express = require('express')
const router = express.Router()

router.use(express.urlencoded({ extended: false }))


router.get('/', (req, res, next) => {
  console.log('get /users/')
})

router.get('/:id', (req, res, next) => {
  console.log(`get /users/:id ${req.params.id}`)
})

router.post('/', (req, res, next) => {
  console.log('post /users/')
})

router.put('/:id', (req, res, next) => {
  console.log('put /users/:id')
})

router.delete('/:id', (req, res, next) => {
  console.log('delete /users/:id')
})

module.exports = router 
