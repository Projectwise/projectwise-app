import {PROJECT as constants} from '../config/constants'

const initialState = {
  isLoading: true
}

const normalizeProjects = (projects) => {
  let projectsObj = {}
  projects.forEach((project) => {
    projectsObj[project.slug] = project
  })
  return projectsObj
}

const addProjectToProjects = (projects, project) => {
  return Object.assign({}, projects, {[project.slug]: project})
}

const projects = (state = initialState, action) => {

  switch (action.type) {

    case constants.FETCH_ALL_REQUEST:
      return Object.assign({}, state)

    case constants.FETCH_ALL_SUCCESS:
      console.log(`fetch all success ${JSON.stringify(action)}`)
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        items: normalizeProjects(action.projects)
      })

    case constants.FETCH_ALL_ERROR:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        error: action.message
      })

    case constants.FETCH_REQUEST:
      return Object.assign({}, state)

    case constants.FETCH_SUCCESS:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        items: addProjectToProjects(state.items, action.project)
      })

    case constants.FETCH_ERROR:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        error: action.message
      })

    default:
      return state
  }
}

export default projects
