const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, lowercase: true, unique: true },
  password: { type: String, required: true },
  profile: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    description: String,
    github: String,
    dribbble: String,
    behance: String,
    website: String
  },
  token: {
    password: {
      resetToken: {type: String},
      createdAt: {type: Date}
    },
    emailToken: {type: String}
  },
  meta: {
    isVerified: {type: Boolean, default: false},
    isActive: {type: Boolean, default: true}
  }
})

UserSchema.pre('save', function (next) {
  const SALT_FACTOR = 5
  if (!this.isModified('password')) next()

  bcrypt.genSalt(SALT_FACTOR)
    .then((salt) => {
      bcrypt.hash(this.password, salt)
        .then(hash => {
          this.password = hash
          next()
        })
        .catch(err => next(err))
    })
    .catch(err => next(err))
})

UserSchema.methods.validateResetToken = function (token) {
  const expiresIn = 2 // 2 days, need to move this.
  var now = new Date()
  const isValid = (this.token.password.resetToken === token && (now - this.password.createdAt) > expiresIn)
  return isValid
}

UserSchema.methods.toUserObject = function () {
  let user = this.toObject()
  delete user.password
  if (user.token) delete user.token
  delete user.__v
  return user
}

UserSchema.methods.comparePassword = function (validatePassword, cb) {
  bcrypt.compare(validatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err)
    cb(null, isMatch)
  })
}

module.exports = mongoose.model('User', UserSchema)
