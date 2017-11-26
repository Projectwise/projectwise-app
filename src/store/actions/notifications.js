import shortid from 'shortid'

import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants'
import colors from '../../styles/colors'

const defaultOptions = {
  color: colors.success
}

export const createNotification = (options) => ({
  id: shortid.generate(),
  ...defaultOptions,
  ...options
})

export const addNotification = (options = {}) => ({
  payload: createNotification(options),
  type: ADD_NOTIFICATION
})

export const removeNotification = (id) => ({
  payload: id,
  type: REMOVE_NOTIFICATION
})
