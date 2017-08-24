import API from '../api'
import { USER as constants } from '../config/constants'
import { setAuthenticated } from './auth/token'

export const fetchRequest = () => {
  return {
    type: constants.FETCH_REQUEST,
    isLoading: true
  }
}

export const fetchError = (message) => {
  return {
    type: constants.FETCH_ERROR,
    isLoading: false,
    message
  }
}

export const fetchSuccess = (user) => {
  return {
    type: constants.FETCH_SUCCESS,
    isLoading: false,
    user
  }
}

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchRequest())

    return API.fetchUser()
      .then((response) => {
        if(response.status !== 200) {
          dispatch(fetchError(response.data))
          return Promise.reject(response)
        } else {
          dispatch(fetchSuccess(response.data))
          dispatch(setAuthenticated())
        }
      })
  }
}
