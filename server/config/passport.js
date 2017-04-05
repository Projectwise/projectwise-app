const passport = require('passport')
const User = require('../models/User.js')
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')

const localOptions = {
  usernameField: 'email'
}

const JWTOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeader(),
  secretOrKey: process.env.SECRET
}

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) done(err)
    if(!user) {
      return done(null, false, { error: 'Your details could not be verified'})
    }
    user.comparePassword(password, (err, isMatch) => {
      if(err) return done(err)
      if(!isMatch) {
        return done(null, false, { error: 'Your details could not be verified'})
      }
      return done(null, user)
    })
  })
})

const JWTLogin = new JWTStrategy(JWTOptions, (payload, done) => {
  User.findById(payload._id, (err, user) => {
    if(err) return done(err)

    if(user) return done(null, user)
    else return done(null, false)
  })
})

passport.use(localLogin)
passport.use(JWTLogin)

exports.isAuthenticated = passport.authenticate('jwt', {session: false})
