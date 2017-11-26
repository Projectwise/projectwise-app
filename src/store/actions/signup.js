/* global localStorage */

import { SIGNUP } from '../constants'
import API from '../../api'

const signup = (user) => {
  API.setAuthHeader(user.token)
  localStorage.setItem('token', user.token)
  delete user.token
  return {
    type: SIGNUP,
    payload: {
      user,
      isAuthenticated: true
    }
  }
}

export default signup
