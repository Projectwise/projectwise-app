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
    .catch(err => {
      return next(err)
    })
}

exports.postProject = (req, res, next) => {
  const validatedProject = validateProject(req.body)

  if (Object.keys(validatedProject.errors).length) {
    let err = new Error('Invalid data')
    err.statusCode = 422
    err.details = validatedProject.errors
    return next(err)
  }
  validatedProject.project['addedBy'] = req.user._id
  let project = new Project(validatedProject.project)
  project.save()
    .then((project) => {
      res.status(200).json(project)
    })
    .catch((err) => {
      next(err)
    })
}

const validateProject = (body) => {
  let errors = {}
  let project = {}
  project['meta'] = {}
  project['helpFields'] = {}

  if (!body.name || !validator.isAlphanumeric(body.name)) {
    errors['name'] = 'Invalid value.'
  } else {
    project['name'] = validator.trim(body.name)
  }
  if (!body.description) {
    errors['description'] = 'Invalid description'
  } else {
    project['description'] = validator.trim(body.description)
  }
  if (!body.helpDescription) {
    errors['helpDescription'] = 'Invalid help description'
  } else {
    project['helpDescription'] = validator.trim(body.helpDescription)
  }
  if (body.projectUrl) {
    const url = validator.trim(body.projectUrl)
    if (validator.isURL(body.projectUrl)) {
      project['meta']['projectUrl'] = url
    } else {
      errors['projectUrl'] = 'Invalid project URL'
    }
  } else {
    errors['projectUrl'] = 'Project url is required'
  }
  if (body.homepage) {
    const url = validator.trim(body.homepage)
    if (validator.isURL(body.homepage)) {
      project['meta']['homepage'] = url
    } else {
      errors['homepage'] = 'Invalid homepage URL'
    }
  }
  if (!body.logoHelp && !body.uiHelp && !body.uxHelp) {
    errors['helpFields'] = 'Please select atleast one help field'
  }

  if (body.logoHelp) {
    // validator.toBoolean(body.logoHelp, ['strict'])
    project['helpFields']['logo'] = true
  }
  if (body.uiHelp) {
    project['helpFields']['ui'] = true
  }
  if (body.uxHelp) {
    project['helpFields']['ux'] = true
  }

  return {errors, project}
}
