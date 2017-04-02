import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from './Landing'
import Signup from './Signup'
import Login from './Login'
import ProjectForm from './ProjectForm'

const Root = () => {
  return(
    <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/signup' component={Signup} />
    <Route path='/login' component={Login} />
    <Route path='/new' component={ProjectForm} />
  </Switch>
  )
}

export default Root
