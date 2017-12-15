import { handle } from 'redux-pack'

import {
  GET_PROJECTS,
  GET_PROJECT,
  LIKE_PROJECT,
  DISLIKE_PROJECT
} from '../constants'

const initialState = {
  isLoading: false,
  projectsById: {},
  errors: {}
}

const normaliseProjects = (prevProjects, newProjects) => {
  const projects = {...prevProjects}
  if (Array.isArray(newProjects)) {
    newProjects.forEach(project => {
      projects[project.slug] = project
    })
  } else if (typeof newProjects === 'object' && newProjects.slug) {
    projects[newProjects.slug] = newProjects
  }
  return projects
}

const handleProjects = (payload) => ({
  start: prevState => ({
    ...prevState,
    isLoading: true
  }),
  finish: prevState => ({
    ...prevState,
    isLoading: false
  }),
  success: prevState => ({
    ...prevState,
    projectsById: normaliseProjects(prevState.projects, payload.data.projects)
  }),
  failure: prevState => ({
    ...prevState,
    errors: { ...payload.data.errors }
  })
})

const handleProject = (payload) => ({
  start: prevState => ({
    ...prevState,
    isLoading: true
  }),
  finish: prevState => ({
    ...prevState,
    isLoading: false
  }),
  success: prevState => ({
    ...prevState,
    projectsById: normaliseProjects(prevState.projects, payload.data.project)
  }),
  failure: prevState => ({
    ...prevState,
    errors: { ...payload.data.errors }
  })
})

const projects = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_PROJECTS:
      return handle(state, action, handleProjects(payload))

    case GET_PROJECT:
      return handle(state, action, handleProject(payload))

    case LIKE_PROJECT:
      return handle(state, action, handleProject(payload))

    case DISLIKE_PROJECT:
      return handle(state, action, handleProject(payload))

    default:
      return state
  }
}

export default projects
