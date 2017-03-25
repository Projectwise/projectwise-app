const mongoose = require('mongoose')

// http://blog.benmcmahen.com/post/41122888102/creating-slugs-for-your-blog-using-expressjs-and
const slugify = (text) => {
  return (
    text.toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
  )
}

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    unique: true,
    index: true
  },
  addedBy: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  description: {
    type: String,
    required: true
  },
  helpDescription: {
    type: String
  },
  helpFields: {
    logo: {type: Boolean, default: false},
    ui: {type: Boolean, default: false},
    ux: {type: Boolean, default: false}
  },
  meta: {
    projectUrl: {type: String, required: true},
    homepage: { type: String}
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

ProjectSchema.pre('save', function(next){
  this.slug = slugify(this.name)
  next()
})

module.exports = mongoose.model('Project', ProjectSchema)
