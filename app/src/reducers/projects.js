import {PROJECT as constants} from '../config/constants'

const initialState = {
  isLoading: true
}

const projects = (state = initialState, action) => {

  switch (action.type) {

    case constants.FETCH_ALL_REQUEST:
      return Object.assign({}, state)

    case constants.FETCH_ALL_SUCCESS:
    console.log(`fetch all success ${JSON.stringify(action)}`)
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        list: action.projects
      })


    case constants.FETCH_ALL_ERROR:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        error: action.message
      })

    default:
      return state
  }
}

export default projects
