const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
  discussion_id: { type: mongoose.Schema.ObjectId, required: true },
  posted: {type: Date, default: Date.now()},
  author: {
    id: mongoose.Schema.ObjectId,
    name: String
  },
  text: {type: String, required: true}
})

module.exports = mongoose.model('Comment', CommentSchema)
