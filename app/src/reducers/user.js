import {LOGIN as loginConstants} from '../config/constants'
import {SIGNUP as signupConstants} from '../config/constants'
import {USER as userConstants} from '../config/constants'

const initialState = {
  isLoading: false
}

const user = (state = initialState, action) => {

  switch (action.type) {

    case loginConstants.REQUEST:
      return Object.assign({}, state, {
        credentials: action.credentials
      })

    case loginConstants.SUCCESS:
      return Object.assign({}, state, {
        details: action.user
      })

    case loginConstants.ERROR:
      return Object.assign({}, state, {
        error: action.message
      })

    case signupConstants.REQUEST:
      return Object.assign({}, state, {
        signupDetails: action.details
      })

    case signupConstants.SUCESS:
      return Object.assign({}, state, {
        details: action.user
      })

    case signupConstants.ERROR:
      return Object.assign({}, state, {
        error: action.message
      })

    case userConstants.FETCH_ERROR:
      return Object.assign({}, state, {
        error: action.message
      })

    case userConstants.FETCH_SUCCESS:
      return Object.assign({}, state, {
        details: action.user
      })

    default:
      return state
  }
}

export default user
