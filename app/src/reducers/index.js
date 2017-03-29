import { combineReducers } from 'redux'

import loginReducer from './login'

const App = combineReducers({
  loginState: loginReducer
})

export default App
