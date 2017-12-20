import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from '../containers/PrivateRoute'
import Footer from '../components/Footer'
import Notifications from '../containers/Notifications'
import Container from '../components/Container'

import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Projects from './Projects'
import Project from './Project'
import AddProject from './AddProject'
import Profile from './Profile'

const Root = () => {
  return (
    <Container fluid>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <PrivateRoute path='/new' component={AddProject} />
        <Route path='/projects/:projectId' component={Project} />
        <Route path='/projects' component={Projects} />
        <Route path='/profile' component={Profile} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
      <Notifications />
    </Container>
  )
}

export default Root
