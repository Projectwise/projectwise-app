import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Container from '../../components/Container'
import Navbar from '../../containers/Navbar'
import ProjectForm from './ProjectForm'
import colors from '../../styles/colors'

const WrapperContainer = styled(Container)`
  max-width: 700px;
`

const AddProject = () => {
  return ([
    <Navbar />,
    <WrapperContainer className='my-1' color={colors.white}>
      <ProjectForm />
    </WrapperContainer>
  ])
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(AddProject)
