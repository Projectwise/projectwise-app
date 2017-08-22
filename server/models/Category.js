const mongoose = require('mongoose')
const slugify = require('../utils').slugify

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String }
})

CategorySchema.pre('save', function (next) {
  this.slug = slugify(this.name)
  next()
})

module.exports = mongoose.model('Category', CategorySchema)
