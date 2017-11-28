import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from '../containers/PrivateRoute'
// import Navbar from '../containers/PrimaryNavbar'
// import { Footer } from '../components/Navigation'
import Notifications from '../containers/Notifications'
import Container from '../components/Container'

import Home from './Home'
import Login from './Login'
import Signup from './Signup'
// import Account from './Account'
// import Subscriptions from './Subscriptions'
// import Orders from './Orders'

const Root = () => {
  return (
    <Container fluid>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/' component={Home} />
      </Switch>
      <Notifications />
    </Container>
  )
}

export default Root
