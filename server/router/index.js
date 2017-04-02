const express = require('express')
const projectController = require('../controllers/project')
const authController = require('../controllers/auth')
const passport = require('../config/passport')

module.exports = (app) => {
  const APIRoutes = express.Router()
  const projectRoutes = express.Router()
  const authRoutes = express.Router()

  APIRoutes.use('/', authRoutes)
  authRoutes.post('/signup', authController.register)
  authRoutes.post('/login', authController.login)

  APIRoutes.use('/projects', projectRoutes)
  projectRoutes.post('/', authController.isAuthenticated, projectController.postProject)
  projectRoutes.get('/', projectController.getAllProjects)
  projectRoutes.get('/:projectId', projectController.getProject)

  app.use('/api', APIRoutes)
}
