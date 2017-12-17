import React, { Component } from 'react'
import { Button, Row } from 'reactstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Container from '../../components/Container'
import Navbar from '../../containers/Navbar'
import Margin from '../../components/Margin'
import overhaulImage from '../../assets/images/logo-dashboard.png'
import colors from '../../styles/colors'

const Header = styled.h2`
  color: ${props => props.color || colors.white}
`

const RowHeader = styled.h3`
  color: ${props => props.color || colors.white}
`

const SubHeader = styled.h5`
  color: ${props => props.color || colors.white}
`

const RowSubHeader = styled.h6`
  color: ${props => props.color || colors.white}
`

const FullButton = styled(Button)`
  font-size: 1rem;
  font-weight: bold;
`

class Home extends Component {
  render () {
    return (
      <Container fluid color={colors.white}>
        <Navbar>
          <Container color='transparent'>
            <Header className='text-center mt-5'>Open source needs better design workflows</Header>
            <SubHeader className='text-center mt-5 pt-3'>Find open source projects and help them improve their user interface and experience.</SubHeader>
            <Row className='pb-4'>
              <FullButton tag={Link} to='/projects' color='primary' className='mx-auto mt-4 mb-5' size='lg'>
                Explore Projects&nbsp;&nbsp;<i className='fa fa-arrow-right' aria-hidden='true' />
              </FullButton>
            </Row>
          </Container>
        </Navbar>
        <Container color={colors.white}>
          <RowHeader color={colors.secondary} className='text-center mt-5'>Improve logo designs, landing pages or dashboards</RowHeader>
          <RowSubHeader color={colors.secondary} className='text-center pt-3'>Open source projects need help across board, be it logos to full scale dashboards.</RowSubHeader>
          <RowSubHeader color={colors.secondary} className='text-center'>Contributing to open source makes them better inside out.</RowSubHeader>
          <div className='py-5 d-flex justify-content-center'>
            <img src={overhaulImage} />
          </div>
        </Container>
        <Margin />
        <Container color={colors.white}>
          <RowHeader color={colors.secondary} className='text-center mt-5'>Have an open-source project that requires design overhaul ?</RowHeader>
          <RowSubHeader color={colors.secondary} className='text-center pt-4'>You can list any open-source project that requires design help.</RowSubHeader>
          <div className='pt-3 pb-5 d-flex justify-content-center'>
            <FullButton tag={Link} to='/new' color='primary' className='my-3' size='lg'>
              Add a new project&nbsp;&nbsp;<i className='fa fa-arrow-right' aria-hidden='true' />
            </FullButton>
          </div>
        </Container>
      </Container>
    )
  }
}

export default Home
