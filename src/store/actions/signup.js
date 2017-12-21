import { SIGNUP } from '../constants'

const signup = (user) => (dispatch) => {
  return {
    type: SIGNUP,
    payload: {
      user,
      isAuthenticated: true
    }
  }
}

export default signup
