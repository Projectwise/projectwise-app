const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const passport = require('passport')

require('dotenv').config()

const router = require('./router')

mongoose.Promise = global.Promise

connectDB()
  .on('error', console.log)
  .on('disconnected', connectDB)
  .once('open', listen)

const app = express()

app.use(passport.initialize())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(logger('dev'))

app.use(cors())

router(app)

app.use((err, req, res, next) => {

  if(req.app.get('env') !== 'development') {

  }
  console.log(err)
  return res.status(err.statusCode || 500).json({
    errors: {
      message: (err.message) ? err.message : 'Something went wrong',
      details: (err.details) ? err.details : 'No details specified'
    }
  })
})

function connectDB() {
  const options = { server: { socketOptions: {keepAlive: 1}}}
  return mongoose.connect(process.env.DB, options).connection;
}

function listen() {
  app.listen(process.env.PORT)
  console.log('App is running')
}
