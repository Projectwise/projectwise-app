import { combineReducers } from 'redux'

import userReducer from './user'
import authReducer from './auth'
import projectsReducer from './projects'

const App = combineReducers({
  isAuthenticated: authReducer,
  user: userReducer,
  projects: projectsReducer
})

export default App
