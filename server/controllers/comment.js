const Comment = require('../models/Comment')

exports.getAllComents = (req, res, next) => {
  const discussionId = req.params.projectId

  Comment.find({discussionId}).exec()
    .then((comments) => {
      return res.status(200).json({
        comments
      })
    })
    .catch(err => next(err))
}

exports.getComment = (req, res, next) => {
  const commentId = req.params.commentId

  Comment.findById(commentId).exec()
    .then((comment) => {
      return res.status(200).json(comment)
    })
    .catch(err => next(err))
}

exports.updateComment = (req, res, next) => {
  const commentId = req.params.commentId
  Comment.findById(commentId).exec()
    .then((comment) => {
      if (req.user._id !== comment.author.id) {
        return res.status(401).json({
          message: 'You are not authorized to edit the comment'
        })
      } else {
        comment.text = req.body.text
        comment.save()
          .then((comment) => {
            return res.status(200).json(comment)
          })
          .catch(err => next(err))
      }
    })
    .catch(err => next(err))
}

exports.addComment = (req, res, next) => {
  const validatedComment = validateComment(req)
  if (Object.keys(validatedComment.errors)) {
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

exports.deleteComment = (req, res, next) => {
  const commentId = req.params.commentId
  Comment.remove({_id: commentId}).exec()
    .then((comment) => {
      res.status(200).json({
        message: 'Comment successfully removed'
      })
    })
    .catch((err) => next(err))
}

const validateComment = (request) => {
  let errors = {}
  let comment = {}

  if (!request.params.projectId) {
    errors['discussion_id'] = 'Discussion Id not available'
  } else {
    comment['discussion_id'] = request.params.projectId
  }

  if (!request.body.text) {
    errors['text'] = 'Comment text is required'
  } else {
    comment['text'] = request.body.text
  }
  comment['author'] = {
    id: request.user._id,
    name: request.user.profile.firstName
  }

  return {comment, errors}
}
