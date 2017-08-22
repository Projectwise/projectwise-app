const crypto = require('crypto')

// http://blog.benmcmahen.com/post/41122888102/creating-slugs-for-your-blog-using-expressjs-and
const slugify = (text) => {
  return (
    text.toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w]+/g, '')
    .replace(/\+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
  )
}

const generateRandomToken = (length) => {
  length = length || 20
  return new Promise(function (resolve, reject) {
    crypto.randomBytes(length, function (err, buf) {
      if (err) {
        reject(err)
        return
      }
      resolve(buf.toString('hex'))
    })
  })
}

exports.slugify = slugify
exports.generateRandomToken = generateRandomToken
