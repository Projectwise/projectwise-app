import { GET_PROJECTS, GET_PROJECT } from '../constants'
import API from '../../api'

export const getProjects = () => {
  return {
    type: GET_PROJECTS,
    promise: API.getProjects()
  }
}

export const getProject = (projectId) => {
  return {
    type: GET_PROJECT,
    promise: API.getProject(projectId)
  }
}
