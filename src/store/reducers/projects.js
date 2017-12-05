import { handle } from 'redux-pack'

import { GET_PROJECTS } from '../constants'

const initialState = {
  isLoading: false,
  projectsById: {},
  errors: {}
}

const normaliseProjects = (prevProjects, newProjects) => {
  const projects = {...prevProjects}
  if (Array.isArray(newProjects)) {
    newProjects.forEach(project => {
      projects[project.id] = project
    })
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

const projects = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_PROJECTS:
      return handle(state, action, handleProjects(payload))

    default:
      return state
  }
}

export default projects
