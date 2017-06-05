const Comment = require('../models/Comment')
const validator = require('validator')

exports.getAllComents = (req, res, next) => {

  const discussion_id = req.params.projectId

  Comment.find({discussion_id}).exec()
    .then((comments) => {
      return res.status(200).json({
        comments
      })
    })
    .catch(err => next(err))
}

exports.getComment = (req, res, next) => {

  const comment_id = req.params.comment_id

  Comment.findOne(comment_id).exec()
    .then((comment) => {
      return res.status(200).json(comment)
    })
    .catch(err => next(err))
}

exports.addComment = (req, res, next) => {

  const validatedComment = validateComment(req)

  if(Object.keys(validatedComment.errors)) {
    let err = new Error('Invalid data')
    err.statusCode = 422
    err.details = validatedComment.errors
    return next(err)
  }

  let comment = new Comment(validatedComment.comment)
  comment.save()
    .then((comment) => {
      return res.status(200).json(comment)
    })
    .catch(err => next(err))
}

const validateComment = (request) => {
  let errors = {}
  let comment = {}

  if(!req.params.projectId) {
    errors['discussion_id'] = 'Discussion Id not available'
  } else {
    comment['discussion_id'] = req.params.projectId
  }

  if(!req.body.text) {
    errors['text'] = 'Comment text is required'
  } else {
    comment['text'] = req.body.text
  }
  comment['author'] = {
    id: req.user._id,
    name: req.user.profile.firstName
  }

  return {comment, errors}
}
