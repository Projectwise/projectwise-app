const ejs = require('ejs') // eslint-disable-line no-unused-vars

const mailgun = require('../../config/mailgun')
const constants = require('../../utils/constants').emailConstants
const jobConstants = require('../../utils/constants').jobNames

const generateEmailParams = (options) => {
  return {
    from: constants.ACCOUNTS_FROM,
    to: options.to,
    subject: options.subject,
    template: {
      name: options.templatePath,
      engine: 'ejs',
      context: options.context
    }
  }
}

module.exports = (agenda) => {
  agenda.define(jobConstants.CONFIRM_EMAIL, (job, done) => {
    const data = job.attrs.data
    let emailOptions = generateEmailParams({
      to: {
        name: data.firstName,
        address: data.email
      },
      templatePath: constants.CONFIRM_EMAIL_TEMPLATE_PATH,
      context: {
        firstName: data.firstName,
        token: data.token
      }
    })
    mailgun.sendMail(emailOptions, (err, info) => {
      if (err) {
        console.log(err)
        return done(err)
      } else {
        console.log(info)
        return done(null, info)
      }
    })
  })
}
