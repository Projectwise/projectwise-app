import React, { Component } from 'react'
import { Container, Segment } from 'semantic-ui-react'

import NavBar from './Navbar'

class Landing extends Component {
  render() {
    return (
      <Container fluid>
        <Segment basic className='masthead' vertical>
          <NavBar inverted/>
        </Segment>
      </Container>
    )
  }
}

export default Landing
