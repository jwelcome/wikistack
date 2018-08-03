const express = require('express')
const app = express()
const models = require('./models/index')

const morgan = require('morgan')

app.use(morgan('dev'))

app.use('/wiki', require('./routes/wiki'))
app.use('/user', require('./routes/user'))


app.get('/', (req,res,next)=>{
  res.redirect('/wiki')
})

const { db, Page, User } = require('./models/index')
db.authenticate().then(() => {
  console.log('connected to the database')
})

const PORT = 3000

const init = async () => {
  await models.db.sync({ force: true })

  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
}

init()
