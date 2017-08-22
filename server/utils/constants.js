const path = require('path')

exports.emailConstants = {
  ACCOUNTS_FROM: process.env.EMAIL_FROM_ACCOUNT,
  CONFIRM_EMAIL_SUBJECT: 'Verify your Projectwise Account',
  CONFIRM_EMAIL_TEMPLATE_PATH: path.resolve(__dirname, '../templates', 'email', 'confirmEmail.html')
}

exports.jobNames = {
  CONFIRM_EMAIL: 'confirmation email'
}
