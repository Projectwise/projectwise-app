const Project = require('../models/Project')
const validator = require('validator')

exports.getAllProjects = (req, res, next) => {

  Project.find().exec()
    .then((projects) => {
      return res.status(200).json({
        projects: projects
      })
    })
    .catch(err => {
      return next(err)
    })
}

exports.getProject = (req, res, next) => {

  Project.findOne({slug: req.params.projectId}).exec()
    .then(project => {
      return res.status(200).json(project)
    })
}

exports.postProject = (req, res, next) => {
  const validatedProject = validateProject(req.body)

  if(Object.keys(validatedProject.errors).length){
    let err = new Error('Invalid data')
    err.statusCode = 400
    err.details = errors
    return next(err)
  }
  let project = new Game(validatedProject.project)
  project.save()
    .then((project) => {
      res.status(200).json(project)
    })
}

const validateProject = (body) => {
  let errors = {}
  let project = {}
  if(!body.name || !validator.isAlphanumeric(body.name)) {
    errors['name'] = 'Invalid value.'
  } else {
    project['name'] = 'body.name'
  }
  if(!body.description) {
    errors['description'] = 'Invalid description'
  } else {
    project['description'] = body.description
  }
  if(!body.helpDescription) {
    errors['helpDescription'] = 'Invalid help description'
  } else {
    project['helpDescription'] = body.helpDescription
  }
  if(body.projectUrl) {
    if(validator.isURL(body.projectUrl)){
      project['meta']['projectUrl'] = body.projectUrl
    } else {
      errors['projectUrl'] = 'Invalid project URL'
    }
  }
  if(body.homepage) {
    if(validator.isURL(body.homepage)){
      project['meta']['homepage'] = body.homepage
    } else {
      errors['homepage'] = 'Invalid homepage URL'
    }
  }
  if(body.logoHelp) {
    project['helpFields']['logo'] = true
  }
  if(body.uiHelp) {
    project['helpFields']['ui'] = true
  }
  if(body.uxHelp) {
    project['helpFields']['ux'] = true
  }
  return {errors, project}
}
