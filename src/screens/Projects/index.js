import React, { Component } from 'react'

import Container from '../../components/Container'
import Banner from '../../components/Banner'
import ProjectList from './ProjectList'
import Navbar from '../../containers/Navbar'
import colors from '../../styles/colors'

class Projects extends Component {
  render () {
    return (
      <Container fluid color={colors.white}>
        <Navbar />
        <Banner />
        <ProjectList />
      </Container>
    )
  }
}

export default Projects
