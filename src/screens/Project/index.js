import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Container from '../../components/Container'
import Preloader from '../../components/Preloader'
import Navbar from '../../containers/Navbar'
import ProjectPage from './ProjectPage'
import { getProject } from '../../store/actions/projects'

const WrapperContainer = styled(Container)`
  max-width: 600px;
`

const NotFoundContainer = () => ([
  <Navbar />,
  <WrapperContainer>
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
      return (<Preloader />)
    } else if (!projects.projectsById[projectId]) {
      return (<NotFoundContainer />)
    } else {
      return ([
        <Navbar />,
        <ProjectPage project={projects.projectsById[projectId]} />
      ])
    }
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects
})

export default connect(mapStateToProps, { getProject })(Project)
