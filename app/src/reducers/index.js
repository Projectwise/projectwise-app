import { combineReducers } from 'redux'

import userReducer from './user'
import authReducer from './auth'

const App = combineReducers({
  isAuthenticated: authReducer,
  user: userReducer
})

export default App
