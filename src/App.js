import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import './styles/bootstrap-theme.css'
import './styles/App.css'

import Root from './screens/Root'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Root />
      </Router>
    </Provider>
  )
}

export default App
