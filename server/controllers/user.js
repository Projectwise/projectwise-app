const User = require('../models/User')

exports.profile = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      return res.status(200).json(user.toUserObject())
    })
    .catch(err => next(err))
}
