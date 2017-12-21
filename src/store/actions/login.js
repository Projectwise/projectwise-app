import { LOGIN } from '../constants'

const login = (user) => ({
  type: LOGIN,
  payload: {
    isAuthenticated: true,
    user
  }
})

export default login
