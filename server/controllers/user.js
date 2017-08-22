const validator = require('validator')

const User = require('../models/User')
const queue = require('../queue/worker')
const constants = require('../utils/constants').jobNames
const generateRandomToken = require('../utils').generateRandomToken
const invalidDataError = require('../utils/errors').invalidDataError

exports.profile = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      return res.status(200).json(user.toUserObject())
    })
    .catch(err => next(err))
}

exports.resetPasswordRequest = (req, res, next) => {
  const errors = {}
  if (!req.body.email || !validator.isEmail(validator.trim(req.body.email))) {
    errors['email'] = 'Invalid email'
    return next(invalidDataError(422, errors))
  }
  User.findOne({email: req.body.email}).exec()
    .then((user) => {
      generateRandomToken.then((token) => {
        queue.now(constants.RESET_PASSWORD, {
          token,
          email: user.email
        })
        res.status(200).json({
          message: 'Reset password email sent successfully'
        })
      })
      .catch(err => next(err))
    })
    .catch(err => next(err))
}

exports.verifyEmail = (req, res, next) => {
  if (!req.query.token) {
    return next(invalidDataError(400, {token: 'No verification token provided'}))
  }
  User.findOne({'token.emailToken': req.query.token}).exec()
    .then((user) => {
      user.isActive = true
      user.token.emailToken = null
      user.save()
        .then((user) => {
          res.status(200).json({
            message: 'Email verified successfully'
          })
        })
        .catch(err => next(err))
    })
    .catch(err => next(err))
}

exports.resetPassword = (req, res, next) => {
  if (!req.query.token) {
    return next(invalidDataError(400, {token: 'No reset token provided'}))
  }
  User.findOne({'token.password.resetToken': req.query.token}).exec()
    .then((user) => {
      if (!user.validateResetToken()) {
        return next(invalidDataError(400, {token: 'Reset token expired'}))
      }
      if (!req.body.password) {
        return next(invalidDataError(400, {password: 'Invalid password'}))
      }
      user.password = req.body.password
      user.save().exec()
        .then(user => {
          return res.status(200).json({
            message: 'Password updated successfully'
          })
        })
        .catch(err => next(err))
    })
    .catch(err => next(err))
}
