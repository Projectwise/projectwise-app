import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Container from '../../components/Container'
import Preloader from '../../components/Preloader'
import Navbar from '../../containers/Navbar'
import ProjectPage from './ProjectPage'
import colors from '../../styles/colors'
import { getProject } from '../../store/actions/projects'

const WrapperContainer = styled(Container)`
  min-height: calc(100vh - 130px);
`

const NotFoundContainer = () => ([
  <Navbar />,
  <WrapperContainer color={colors.white}>
    <h3 className='py-5'>No such project exists</h3>
  </WrapperContainer>
])

class Project extends Component {
  componentDidMount () {
    const { params } = this.props.match
    this.props.getProject(params.projectId)
  }

  render () {
    const { projects, match } = this.props
    const { projectId } = match.params
    if (projects.isLoading) {
      return ([<Navbar />, <Preloader />])
    } else if (!projects.projectsById[projectId]) {
      return (<NotFoundContainer />)
    } else {
      return (
        <WrapperContainer fluid color={colors.white}>
          <Navbar />
          <ProjectPage project={projects.projectsById[projectId]} />
        </WrapperContainer>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects
})

export default connect(mapStateToProps, { getProject })(Project)
