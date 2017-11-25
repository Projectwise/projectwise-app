import { combineReducers } from 'redux'

import auth from './auth'
import projects from './projects'
import categories from './categories'
import notifications from './notifications'

const App = combineReducers({
  auth,
  projects,
  categories,
  notifications
})

export default App
