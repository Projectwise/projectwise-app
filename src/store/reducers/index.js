import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import auth from './auth'
import projects from './projects'
import categories from './categories'
import notifications from './notifications'

const App = combineReducers({
  form: formReducer,
  auth,
  projects,
  categories,
  notifications
})

export default App
