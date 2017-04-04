
import { SIGNUP as constants } from '../../config/constants'
import { setAuthToken } from './token'
import API from '../../api'

const request = (credentials) => {
  return {
    type: constants.REQUEST,
    userDetails
  }
}

const receive = (user) => {
  return {
    type: constants.SUCCESS,
    user
  }
}

const error = (message) => {
  return {
    type: constants.ERROR,
    message
  }
}

const signup = (userDetails) => {

  return (dispatch) => {
    dispatch(request(userDetails))

    return API.signup(credentials)
      .then((response) => {
        if(response.statusText !== 'OK') {
          dispatch(error(response.data.message))
          return Promise.reject(response)
        } else {
          dispatch(setAuthToken(response.data.token))
          dispatch(receive(response.data.user))
        }
      }).catch(err => console.log(`Errors: ${err}`))
  }
}

export default signup
