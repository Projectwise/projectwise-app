import { SIGNUP, LOGIN, LOGOUT } from '../constants'

const initialState = {
  isAuthenticated: false,
  user: null
}

const auth = (state = initialState, action) => {
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
