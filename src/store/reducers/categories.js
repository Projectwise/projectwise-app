import { handle } from 'redux-pack'

import { GET_CATEGORIES } from '../constants'

const initialState = {
  isLoading: false,
  categoryList: {},
  errors: {}
}

const handleCategories = (payload) => ({
  start: prevState => ({
    ...prevState,
    isLoading: true
  }),
  finish: prevState => ({
    ...prevState,
    isLoading: false
  }),
  success: prevState => ({
    ...prevState,
    categoryList: payload.data.categories
  }),
  failure: prevState => ({
    ...prevState,
    errors: { ...payload.data.errors }
  })
})

const categories = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_CATEGORIES:
      return handle(state, action, handleCategories(payload))

    default:
      return state
  }
}

export default categories
