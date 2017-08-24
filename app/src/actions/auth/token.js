import { AUTH_TOKEN as constants } from '../../config/constants'
import { fetchUser } from '../user'
import API from '../../api'

export const setAuthToken = (token) => {
  localStorage.setItem('token', token)
  API.setAuthHeaders(token)
  return {
    type: constants.SET,
    isAuthToken: true,
    isAuthenticated: true
  }
}

export const setAuthenticated = () => {
  return {
    type: constants.USER_AUTHENTICATED,
    isAuthenticated: true
  }
}

export const checkAuthTokenInStorage = () => {
  return {
    type: constants.AUTH_TOKEN_PRESENT,
    isAuthToken: true
  }
}

export const removeAuthToken = () => {
  localStorage.removeItem('token')
  return {
    type: constants.REMOVE,
    isAuthToken: false,
    isAuthenticated: false
  }
}

export const checkAuth = () => {
  return (dispatch, getState) => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuthTokenInStorage())
      API.setAuthHeaders(localStorage.getItem('token'))
      dispatch(fetchUser())
    }
  }
}
