const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan("dev"));

const { db, Page, User } = require('./models/index');
db.authenticate().
then(() => {
  console.log('connected to the database');
})

const PORT = 3000;

const init = async () => {
  await models.db.sync({force: true});

  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  })
}

init();
