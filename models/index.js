const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page = db.define('page', {
  title: {
    Sequelize.STRING,
    allowNull: false
  },
  slug: {
    Sequelize.STRING,
    allowNull: false
  },
  content: {
    Sequelize.TEXT,
    allowNull: false
  },
  status: {
    Sequelize.ENUM('open', 'closed')
  }
});

const User = db.define('user', {
  name: {
    Sequelize.STRING,
    allowNull: false
  },
  email: {
    Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

module.exports = {
  db, Page, User
};
