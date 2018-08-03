const express = require('express')
const router = express.Router()
const { Page } = require('../models')
const { wikiPage } = require('../views')
const { addPage } = require('../views')

router.use(express.urlencoded({ extended: false }))

async function getAllPages() {
  try {
    const pagesList = await Page.findAll()
    pagesList.forEach(page => main(page))
  } catch (error) {
    console.log(error)
  }
}

router.get('/', (req, res, next) => {
  res.send(Page.getAllpages())
})

router.post('/', async (req, res) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    status: req.body.OPEN
  })

  try {
    await page.save()
    res.redirect(`/wiki/${page.slug}`)
  } catch (error) {
    throw error
  }
})

router.get('/add', (req, res) => {
  res.send(addPage())
})

router.get('/:slug', async (req, res, next) => {
  // res.send(`hit dynamic route at ${req.params.slug}`);

  try {
    const foundPage = await Page.findOne({
      where: { slug: req.params.slug }
    })

    res.send(wikiPage(foundPage))
  } catch (error) {
    next(error)
  }
})

module.exports = router
