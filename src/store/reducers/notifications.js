import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants'

const notifications = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_NOTIFICATION:
      return [...state, payload]

    case REMOVE_NOTIFICATION:
      return state.filter(notification => notification.id !== payload)

    default:
      return state
  }
}

export default notifications
