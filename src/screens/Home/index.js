import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Row } from 'reactstrap'
import styled from 'styled-components'

import Container from '../../components/Container'
import Navbar from '../../containers/Navbar'
import colors from '../../styles/colors'

const Header = styled.h2`
  color: ${colors.white}
`
const SubHeader = styled.h5`
  color: ${colors.light}
`

const FullButton = styled(Button)`
  font-size: 1rem;
  font-weight: bold;
`

class Home extends Component {
  render () {
    return (
      <Container fluid>
        <Navbar>
          <Container color='transparent'>
            <Header className='text-center mt-5'>Open source needs better design workflows</Header>
            <SubHeader className='text-center mt-5 pt-3'>Find open source projects and help them improve their user interface and experience.</SubHeader>
            <Row className='pb-4'>
              <FullButton color='primary' className='mx-auto mt-4 mb-5' size='lg'>
                Explore Projects&nbsp;&nbsp;<i class='fa fa-arrow-right' aria-hidden='true' />
              </FullButton>
            </Row>
          </Container>
        </Navbar>
      </Container>
    )
  }
}

export default Home
