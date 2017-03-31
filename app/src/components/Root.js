import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from './Landing'
import Signup from './Signup'

const Root = () => {
  return(
    <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/signup' component={Signup} />
  </Switch>
  )
}

export default Root
