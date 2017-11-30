import React from 'react'
import { Card as RCard } from 'reactstrap'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

import Container from '../../components/Container'
import Navbar from '../../containers/Navbar'
import colors from '../../styles/colors'
import LoginForm from './LoginForm'

const Card = styled(RCard)`
  border-radius: 3px;
  max-width: 45vw;
`

const Text = styled.h3`
  font-weight: bold;
`

const Login = ({ auth }) => {
  if (auth.isAuthenticated) {
    return (<Redirect to='/' />)
  }
  return ([
    <Navbar />,
    <Container fluid color={colors.light} className='py-5'>
      <Text className='text-muted text-center mb-4'>Welcome Back</Text>
      <Card body className='mx-5 my-3 mx-auto'>
        <LoginForm />
      </Card>
      <p className='mt-1 text-center'>New to Projectwise? <Link to='/signup'>Signup</Link></p>
    </Container>
  ])
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Login)
