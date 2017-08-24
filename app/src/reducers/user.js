import {LOGIN as loginConstants} from '../config/constants'
import {SIGNUP as signupConstants} from '../config/constants'
import {USER as userConstants} from '../config/constants'
import {LOGOUT as logoutConstants} from '../config/constants'
import {AUTH_TOKEN as tokenConstants} from '../config/constants'

const initialState = {
  isLoading: true,
  isAuthToken: false,
  isAuthenticated: false
}

const user = (state = initialState, action) => {

  switch (action.type) {

    case tokenConstants.SET:
      return Object.assign({}, state, {
        isAuthenticated: action.isAuthenticated,
        isAuthToken: action.isAuthToken
      })

    case tokenConstants.USER_AUTHENTICATED:
      return Object.assign({}, state, {
        isAuthenticated: action.isAuthenticated
      })

    case tokenConstants.REMOVE:
      return Object.assign({}, state, {
        isAuthenticated: action.isAuthenticated,
        isAuthToken: action.isAuthToken
      })

    case tokenConstants.AUTH_TOKEN_PRESENT:
      return Object.assign({}, state, {
        isAuthToken: action.isAuthToken
      })

    case loginConstants.REQUEST:
      return Object.assign({}, state, {
        isLoading: action.isLoading
      })

    case loginConstants.SUCCESS:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        details: action.user
      })

    case loginConstants.ERROR:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        error: action.message
      })

    case signupConstants.REQUEST:
      return Object.assign({}, state, {
        isLoading: action.isLoading
      })

    case signupConstants.SUCESS:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        details: action.user
      })

    case signupConstants.ERROR:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        error: action.message
      })

    case userConstants.FETCH_ERROR:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        error: action.message
      })

    case userConstants.FETCH_SUCCESS:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        details: action.user
      })

    case logoutConstants.SUCCESS:
      return initialState

    default:
      return state
  }
}

export default user
