const express = require('express')
const projectController = require('../controllers/project')

module.exports = (app) => {
  const APIRoutes = express.Router()
  const projectRoutes = express.Router()

  APIRoutes.use('/projects', projectRoutes)
  projectRoutes.post('/', projectController.postProject)
  projectRoutes.get('/', projectController.getAllProjects)
  projectRoutes.get('/:projectId', projectController.getProject)

  app.use('/api', APIRoutes)
}
