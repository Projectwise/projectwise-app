import { GET_PROJECTS } from '../constants'
import API from '../../api'

export const getProjects = () => {
  return {
    type: GET_PROJECTS,
    promise: API.getProjects()
  }
}
