/* global localStorage */

import { LOGIN } from '../constants'
import API from '../../api'

const login = (user) => {
  API.setAuthHeader(user.token)
  localStorage.setItem('token', user.token)
  delete user.token
  return {
    type: LOGIN,
    payload: {
      isAuthenticated: true,
      user
    }
  }
}

export default login
