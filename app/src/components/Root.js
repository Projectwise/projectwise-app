import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { checkAuth } from '../actions/auth/token'
import { fetchUser } from '../actions/user'

import Landing from './Landing'
import Signup from './Signup'
import Login from './Login'
import ExploreProjects from './ExploreProjects'
import ProjectForm from './ProjectForm'

class Root extends Component {

  componentDidMount() {
    this.props.checkAuth()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isAuthenticated !== this.props.isAuthenticated) {
      this.props.fetchUser()
    }
  }

  render(){
    return(
      <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <Route path='/explore' component={ExploreProjects} />
      <Route path='/new' component={ProjectForm} />
    </Switch>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps, { checkAuth, fetchUser })(Root)
