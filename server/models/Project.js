const mongoose = require('mongoose')
const slugify = require('../utils').slugify

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true, index: true },
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  isActive: { type: Boolean, default: true },
  description: { type: String, required: true },
  helpDescription: { type: String },
  helpCategories: [{type: mongoose.Schema.ObjectId, ref: 'Category'}],
  meta: {
    projectUrl: {type: String, required: true, unique: true},
    homepage: {type: String}
  },
  createdAt: { type: Date, default: Date.now() }
})

ProjectSchema.pre('save', function (next) {
  this.slug = slugify(this.name)
  next()
})

module.exports = mongoose.model('Project', ProjectSchema)
