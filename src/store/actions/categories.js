import { GET_CATEGORIES } from '../constants'
import API from '../../api'

export const getProjects = () => {
  return {
    type: GET_CATEGORIES,
    promise: API.getCategories()
  }
}
