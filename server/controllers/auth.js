const JWT = require('jsonwebtoken')
const crypto = require('crypto')
const validator = require('validator')
const passport = require('passport')
const series = require('async/series')

const User = require('../models/User')
const generateRandomToken = require('../utils').generateRandomToken

function generateWebToken (user) {
  return JWT.sign(user, process.env.SECRET)
}

exports.register = (req, res, next) => {
  let { user, errors } = validateUser(req.body)

  series({
    isUser: done => {
      checkUser(req.body.email)
      .then(isUser => { done(null, isUser) })
      .catch(err => { done(err) })
    },
    token: done => {
      generateRandomToken(16)
      .then(token => { done(null, token) })
      .catch(err => { done(err) })
    }
  }, (err, results) => {
    if (err) {
      return next(err)
    }
    if (results.isUser) errors['email'] = 'Email is already in use'
    if (Object.keys(errors).length) {
      let err = new Error('Invalid data')
      err.statusCode = 422
      err.details = errors
      return next(err)
    }

    user['token'] = {}
    user.token['emailToken'] = results.token
    let mongoUser = new User(user)
    mongoUser.save()
    .then(user => {
      user = user.toUserObject()
      const webToken = generateWebToken({
        email: user.email,
        _id: user._id
      })
      res.status(201).json({
        user,
        token: `JWT ${webToken}`
      })
    })
    .catch(err => {
      return next(err)
    })
  })
}

exports.login = (req, res, next) => {
  passport.authenticate('local', {session: false}, (err, user, info) => {
    if (err) return next(err)
    if (!user) {
      return next({
        statusCode: 401,
        message: info.error
      })
    }
    User.findById(user._id)
    .then((user) => {
      user = user.toUserObject()
      const webToken = generateWebToken({
        email: user.email,
        _id: user._id
      })
      return res.status(200).json({
        user,
        token: `JWT ${webToken}`
      })
    })
  })(req, res, next)
}

const checkUser = (email) => {
  return new Promise(function (resolve, reject) {
    User.findOne({email}, (err, existingUser) => {
      if (err) {
        reject(err)
        return
      }
      resolve(existingUser ? true : false)
    })
  })
}

const validateUser = (body) => {
  let errors = {}
  let user = {}
  user['profile'] = {}

  if (!body.email || !validator.isEmail(validator.trim(body.email))) {
    errors['email'] = 'Invalid email'
  } else {
    user['email'] = validator.trim(body.email)
  }

  if (!body.password) {
    errors['password'] = 'Invalid password'
  } else {
    user['password'] = body.password
  }

  if (!body.firstName || !validator.isAlpha(validator.trim(body.firstName))) {
    errors['firstName'] = 'Invalid first name.'
  } else {
    user.profile['firstName'] = validator.trim(body.firstName)
  }

  if (!body.lastName || !validator.isAlpha(validator.trim(body.lastName))) {
    errors['lastName'] = 'Invalid last name.'
  } else {
    user.profile['lastName'] = validator.trim(body.lastName)
  }

  if (body.description) {
    user.profile['description'] = validator.trim(body.description)
  }

  if (body.github) {
    const githubURL = validator.trim(body.github)
    if (!validator.isURL(githubURL)) {
      errors['github'] = 'Invalid github url'
    } else {
      user.profile['github'] = githubURL
    }
  }

  if (body.dribbble) {
    const dribbbleURL = validator.trim(body.dribbble)
    if (!validator.isURL(dribbbleURL)) {
      errors['dribbble'] = 'Invalid dribbble url'
    } else {
      user.profile['dribbble'] = dribbbleURL
    }
  }

  if (body.behance) {
    const behanceURL = validator.trim(body.behance)
    if (!validator.isURL(behanceURL)) {
      errors['behance'] = 'Invalid behance url'
    } else {
      user.profile['behance'] = behanceURL
    }
  }

  if (body.website) {
    const website = validator.trim(body.website)
    if (!validator.isURL(website)) {
      errors['website'] = 'Invalid website url'
    } else {
      user.profile['website'] = website
    }
  }

  return {errors, user}
}
