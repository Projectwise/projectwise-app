const express = require('express')
const projectController = require('../controllers/project')
const authController = require('../controllers/auth')
const userController = require('../controllers/user')
const commentController = require('../controllers/comment')
const passport = require('../config/passport')

module.exports = (app) => {
  const APIRoutes = express.Router()
  const projectRoutes = express.Router()
  const commentRoutes = express.Router()
  const authRoutes = express.Router()
  const userRoutes = express.Router()

  APIRoutes.use('/', authRoutes)
  authRoutes.post('/signup', authController.register)
  authRoutes.post('/login', authController.login)

  APIRoutes.use('/', userRoutes)
  userRoutes.get('/profile', passport.isAuthenticated, userController.profile)

  APIRoutes.use('/projects', projectRoutes)
  projectRoutes.post('/', passport.isAuthenticated, projectController.postProject)
  projectRoutes.get('/', projectController.getAllProjects)
  projectRoutes.get('/:projectId', projectController.getProject)

  APIRoutes.use('/projects/:projectId/comments', commentRoutes)
  commentRoutes.post('/', passport.isAuthenticated, commentController.addComment)
  commentRoutes.get('/', commentController.getAllComents)
  commentRoutes.get('/:commentId', commentController.getComment)
  commentRoutes.put('/:commentId', passport.isAuthenticated, commentController.updateComment)
  commentRoutes.delete('/:commentId', passport.isAuthenticated, commentController.deleteComment)

  app.use('/api', APIRoutes)
}
