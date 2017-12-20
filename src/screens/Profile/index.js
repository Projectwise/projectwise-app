import React from 'react'
import { Card as RCard } from 'reactstrap'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

import Container from '../../components/Container'
import Navbar from '../../containers/Navbar'
import colors from '../../styles/colors'
import ProfileForm from './ProfileForm'

const Card = styled(RCard)`
  border-radius: 3px;
  max-width: 45vw;
`

const Text = styled.h3`
  font-weight: bold;
`

const Profile = ({ permission, auth }) => {
  console.log('permission', permission, auth)
  return ([
    <Navbar />,
    <Container fluid color={colors.light} className='py-5'>
      <Text className='text-muted text-center mb-4'>Profile</Text>
      <Card body className='mx-5 my-3 mx-auto'>
        <ProfileForm auth={auth} />
      </Card>
    </Container>
  ])
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Profile)
