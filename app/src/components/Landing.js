import React from 'react'
import { Container, Segment, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Navbar from './Navbar'

const Landing = () => {
  return (
    <Container fluid>
      <Navbar type='masthead'>
        <Container className='text-center'>
            <Header className='landing-header' as='h1' inverted>Open Source needs better design workflows</Header>
            <Header as='h3' className='landing-sub-header' inverted>
              Find open source projects and help them improve their user interface and experience.
            </Header>
              <Button content='Explore Projects' size='huge' inverted as={Link} to='/explore' />
          </Container>
      </Navbar>

      <Header as='h1'>Landing</Header>
    </Container>

  )
}

export default Landing
