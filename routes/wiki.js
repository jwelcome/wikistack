const express = require('express')
const router = express.Router()
const { Page } = require('../models')
const { wikiPage } = require('../views/wikipage')
const { addPage } = require('../views')

router.use(express.urlencoded({ extended: false }));

router.get('/', (req, res, next) => {
  res.send(wikiPage)
});

function generateSlug (title) {
  return title.replace(/\s+/g, '_').replace(/\W/g, '');
}

router.post('/', async (req, res) => {

  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    status: req.body.OPEN
  });

  Page.beforeValidate((page, options) => {
    const generatedSlug = generateSlug(page.title);
    page.slug = generatedSlug;
  })

  try {
    await page.save();
    res.redirect('/');
  } catch(error) { throw(error) }
});

router.get('/add', (req, res) => {
  res.send(addPage())
});

router.get('/:slug', async (req, res, next) => {
  // res.send(`hit dynamic route at ${req.params.slug}`);

  try {
    const foundPage = await Page.findOne({
      where: {slug: req.params.slug}
    });
    res.json(foundPage);
  } catch(error) {
    next(error);
  }

});

module.exports = router;
