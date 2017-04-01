import React, { Component } from 'react'
import { Container, Segment, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import NavBar from './Navbar'

class Landing extends Component {
  render() {
    return (
      <Container fluid>
        <Segment basic className='masthead' vertical textAlign='center'>
          <NavBar inverted/>
          <Container>
            <Header className='landing-header' as='h1' inverted>Open Source needs better design workflows</Header>
            <Header as='h3' className='landing-sub-header' inverted>Find open source projects and help them improve their user interface and experience</Header>
              <Button content='Explore Projects' size='large' color='teal' as={Link} to='/explore' />
          </Container>
        </Segment>
      </Container>
    )
  }
}

export default Landing
