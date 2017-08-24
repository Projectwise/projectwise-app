import { combineReducers } from 'redux'

import userReducer from './user'
import projectsReducer from './projects'

const App = combineReducers({
  user: userReducer,
  projects: projectsReducer
})

export default App
