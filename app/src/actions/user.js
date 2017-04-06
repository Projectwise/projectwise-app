import API from '../api'
import { USER as constants } from '../config/constants'

const fetchRequest = () => {
  return {
    type: constants.FETCH_REQUEST,
    isLoading: true
  }
}

const fetchError = (message) => {
  return {
    type: constants.FETCH_ERROR,
    isLoading: false,
    message
  }
}

const fetchSuccess = (user) => {
  return {
    type: constants.FETCH_SUCCESS,
    user
  }
}

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchRequest())

    return API.fetchUser()
      .then((response) => {
        if(response.statusText !== 'OK') {
          dispatch(fetchError(response.data))
          return Promise.reject(response)
        } else {
          dispatch(fetchSuccess(response.data))
        }
      })
  }
}
