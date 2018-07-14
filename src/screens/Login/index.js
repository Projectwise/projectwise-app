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

const WrappedContainer = styled(Container)`
  min-height: calc(100vh - 130px);
`

const Text = styled.h3`
  font-weight: bold;
  padding-bottom: 1.2em;
`

const Login = ({ permission, auth }) => {
  console.log('permission', permission)
  if (auth.isAuthenticated) {
    return (<Redirect to='/' />)
  }
  return (
    <React.Fragment>
      <Navbar />
      <WrappedContainer fluid color={colors.light} className='py-5'>
        <Text className='text-muted text-center mb-4'>Welcome Back</Text>
        <Card body className='mx-5 my-3 mx-auto'>
          <LoginForm />
        </Card>
        <p className='mt-1 text-center'>New to Projectwise? <Link to='/signup'>Signup</Link></p>
      </WrappedContainer>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Login)
