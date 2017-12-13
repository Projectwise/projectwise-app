import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import _ from 'lodash'

import Container from '../../components/Container'
import Preloader from '../../components/Preloader'
import ProjectRow from './ProjectRow'
import { getProjects } from '../../store/actions/projects'

const WrapperContainer = styled(Container)`
  width: 100%;
  height: 100%;
`

class ProjectList extends Component {
  componentDidMount () {
    this.props.getProjects()
  }

  render () {
    const { projectsById } = this.props.projects
    const projectIds = Object.keys(projectsById)
    let projectsChunk = _.chunk(projectIds, 3)

    if (this.props.projects.isLoading) {
      return <Preloader />
    }
    if (projectIds && projectIds.length === 0) {
      return (
        <WrapperContainer>
          <h5 className='mx-auto my-auto'>No projects found</h5>
        </WrapperContainer>
      )
    }
    return (
      <Container className='my-5 pt-4'>
        {projectsChunk.map((projectIds) => (
          <ProjectRow key={projectIds[0]} projects={projectIds.map(id => projectsById[id])} />
        ))}
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects
})

export default connect(mapStateToProps, { getProjects })(ProjectList)
