
import { SIGNUP as constants } from '../../config/constants'
import { setAuthToken } from './token'
import API from '../../api'

const request = (userDetails) => {
  return {
    type: constants.REQUEST,
    isLoading: true
  }
}

const receive = (user) => {
  return {
    type: constants.SUCCESS,
    isLoading: false,
    user
  }
}

const error = (message) => {
  return {
    type: constants.ERROR,
    isLoading: false,
    message
  }
}

const signup = (userDetails) => {

  return (dispatch) => {
    dispatch(request(userDetails))

    return API.signup(userDetails)
      .then((response) => {
        if(response.status !== 200 || response.status !== 201) {
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
