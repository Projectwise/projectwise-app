import {AUTH_TOKEN as constants} from '../config/constants'

const auth = (state = false, action) => {

  switch (action.type) {

    case constants.SET:
      return action.isAuthenticated

    case constants.REMOVE:
      return action.isAuthenticated

    default:
      return state
  }
}

export default auth
