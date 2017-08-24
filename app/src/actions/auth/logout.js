import { LOGOUT as constants } from '../../config/constants'
import { removeAuthToken } from './token'

const request = () => {
  return {
    type: constants.REQUEST
  }
}

const logout = () => {
  return {
    type: constants.SUCCESS
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(request())
    dispatch(removeAuthToken())
    dispatch(logout())
  }
}
