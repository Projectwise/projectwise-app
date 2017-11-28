import React from 'react'
import { Card as RCard } from 'reactstrap'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

import Container from '../../components/Container'
import colors from '../../styles/colors'
import SignupForm from './SignupForm'

const Card = styled(RCard)`
  border-radius: 3px;
  max-width: 45vw;
`

const Text = styled.h3`
  font-weight: bold;
`

const Signup = ({ auth }) => {
  if (auth.isAuthenticated) {
    return (<Redirect to='/' />)
  }
  return (
    <Container fluid color={colors.light} className='my-5 py-5'>
      <Text className='text-muted text-center mb-4'>Join Projectwise</Text>
      <Card body className='mx-5 my-3 mx-auto'>
        <SignupForm />
      </Card>
      <p className='mt-1 text-center'>Already have an account? <Link to='/login'>Login</Link></p>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Signup)
