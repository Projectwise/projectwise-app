import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from './Landing'
import Signup from './Signup'
import Login from './Login'

const Root = () => {
  return(
    <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/signup' component={Signup} />
    <Route path='/login' component={Login} />
  </Switch>
  )
}

export default Root
