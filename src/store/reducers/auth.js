/* global localStorage */
import jwtDecode from 'jwt-decode'

import API from '../../api'
import { SIGNUP, LOGIN, LOGOUT } from '../constants'

const initialState = {
  isAuthenticated: false,
  user: null
}

const getInitialState = () => {
  try {
    const token = localStorage.getItem('token')
    const { user, exp } = jwtDecode(token)

    // Check if token is expired (It should have more than an hour)
    const isExpired = exp * 1000 - Date.now() < 60 * 1000

    if (isExpired) {
      return initialState
    } else {
      API.setAuthHeader(token)
      return { ...initialState, isAuthenticated: true, user }
    }
  } catch (e) {
    return initialState
  }
}

const auth = (state = getInitialState(), action) => {
  const { type, payload } = action

  switch (type) {
    case SIGNUP:
      return { ...state, ...payload }

    case LOGIN:
      return { ...state, ...payload }

    case LOGOUT:
      return { ...initialState }

    default:
      return state
  }
}

export default auth
