import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import './styles/react-select.css'
import './styles/App.css'

import Root from './screens/Root'
import store from './store'
import auth from './auth'

class App extends Component {
  componentDidMount () {
    auth(store.dispatch)
  }

  render () {
    return (
      <Provider store={store}>
        <Router>
          <Root />
        </Router>
      </Provider>
    )
  }
}

export default App
