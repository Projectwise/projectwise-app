const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profile: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    github: String,
    dribbble: String,
    behance: String,
    website: String
  },
  token: {
    resetToken: {type: String},
    createdAt: {type: Date}
  }
})

UserSchema.pre('save', function (next){
  const user = this
  const SALT_FACTOR = 5

  if(!user.isModified('password')) return next()

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if(err) return next(err)

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if(err) return next(err)
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.validateResetToken = function() {
  const expiresIn = 2 //2 days, need to move this.
  var now = new Date()
  return (now - createDate) > expiresIn
}

UserSchema.methods.comparePassword = function(validatePassword, cb) {
  bcrypt.compare(validatePassword, this.password, function(err, isMatch) {
    if(err) return cb(err)

    cb(null, isMatch)
  })
}

module.exports = mongoose.model('User', UserSchema)
