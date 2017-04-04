import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { checkAuth } from '../actions/auth/token'

import Landing from './Landing'
import Signup from './Signup'
import Login from './Login'
import ProjectForm from './ProjectForm'

class Root extends Component {

  componentDidMount() {
    this.props.checkAuth()
  }
  render(){
    return(
      <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <Route path='/new' component={ProjectForm} />
    </Switch>
    )
  }
}

export default connect(null, { checkAuth })(Root)
