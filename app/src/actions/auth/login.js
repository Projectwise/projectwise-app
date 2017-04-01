
import { LOGIN } from '../../config/constants'
import API from '../../api'

console.log(API)

const requestLogin = (credentials) => {
  return {
    type: LOGIN.REQUEST,
    credentials
  }
}

const receiveLogin = (user) => {
  return {
    type: LOGIN.SUCCESS,
    user
  }
}

const loginError = (message) => {
  return {
    type: LOGIN.ERROR,
    message
  }
}

const loginUser = (credentials) => {

  return (dispatch) => {
    dispatch(requestLogin(credentials))
    
    return API.login(credentials)
      .then((response) => {
        if(response.statusText !== 'OK') {
          dispatch(loginError(response.data.message))
          return Promise.reject(response)
        } else {
          localStorage.setItem('token', response.data.token)

          API.setAuthHeaders(response.data.token)
          dispatch(receiveLogin(response.data.user))
        }
      }).catch(err => console.log(`Errors: ${err}`))
  }
}

export default loginUser
