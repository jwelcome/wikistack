const Sequelize = require('Sequelize')
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
})
const main =require('../views')

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
})

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})





function generateSlug(title) {
  return title.replace(/\s+/g, '_').replace(/\W/g, '')
}

Page.beforeValidate((page, options) => {
  const generatedSlug = generateSlug(page.title)
  page.slug = generatedSlug
})

module.exports = {
  db,
  Page,
  User,
}
