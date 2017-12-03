import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Container from '../../components/Container'
import Navbar from '../../containers/Navbar'
import ProjectForm from './ProjectForm'

const Text = styled.h3`
  font-weight: bold;
`

const WrapperContainer = styled(Container)`
  max-width: 600px;
`

const AddProject = () => {
  return ([
    <Navbar />,
    <WrapperContainer fluid className='py-5'>
      <Text className='text-muted mb-5'>Add a new project</Text>
      <ProjectForm />
    </WrapperContainer>
  ])
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(AddProject)
