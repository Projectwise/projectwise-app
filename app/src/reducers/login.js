import {LOGIN as constants} from '../config/constants'

const initialState = {
  isFetching: false,
  isAuthenticated: (localStorage.getItem('token')) ? true: false
}

const login = (state = initialState, action) => {

  switch (action.type) {

    case constants.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        credentials: action.credentials
      })

    case constants.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        user: action.user
      })

    case constants.ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        message: action.message
      })

    default:
      return state
  }
}

export default login
