
import { LOGIN as constants } from '../../config/constants'
import { setAuthToken } from './token'
import API from '../../api'

console.log(API)

const request = (credentials) => {
  return {
    type: constants.REQUEST,
    isLoading: true,
    credentials
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

const login = (credentials) => {

  return (dispatch) => {
    dispatch(request(credentials))

    return API.login(credentials)
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

export default login
