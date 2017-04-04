import { AUTH_TOKEN as constants } from '../../config/constants'
import API from '../../api'

export const setAuthToken = (token) => {
  localStorage.setItem('token', token)
  API.setAuthHeaders(token)
  return {
    type: constants.SET,
    isAuthenticated: true
  }
}

export const removeAuthToken = (token) => {
  localStorage.removeItem('token')
  return {
    type: constants.REMOVE,
    isAuthenticated: false
  }
}

export const checkAuth = () => {
  return dispatch => {
    if(localStorage.getItem('token')) {
      dispatch(setAuthToken(localStorage.getItem('token')))
    }
  }
}
