/* global localStorage */

import { LOGOUT } from '../constants'
import API from '../../api'

const logout = () => {
  localStorage.removeItem('token')
  API.removeAuthHeader()

  return {
    type: LOGOUT
  }
}

export default logout
