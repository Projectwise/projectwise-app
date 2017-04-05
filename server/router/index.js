const express = require('express')
const projectController = require('../controllers/project')
const authController = require('../controllers/auth')
const userController = require('../controllers/user')
const passport = require('../config/passport')

module.exports = (app) => {
  const APIRoutes = express.Router()
  const projectRoutes = express.Router()
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

  app.use('/api', APIRoutes)
}
