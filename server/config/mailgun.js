const nodemailer = require('nodemailer')
const mailgunTransport = require('nodemailer-mailgun-transport')

const auth = {
  auth: {
    api_key: process.env.MG_API_KEY,
    domain: process.env.MG_API_DOMAIN
  }
}

module.exports = nodemailer.createTransport(mailgunTransport(auth))
