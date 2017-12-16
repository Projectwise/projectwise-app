import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import Container from '../../components/Container'
import Preloader from '../../components/Preloader'
import ProjectRow from './ProjectRow'
import { getProjects } from '../../store/actions/projects'

const WrapperContainer = styled(Container)`
  min-height: 50vh;
`

const FullButton = styled(Button)`
  font-size: 1rem;
  font-weight: bold;
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
        <WrapperContainer className='d-flex flex-column align-items-center justify-content-center'>
          <h5 className='mx-auto my-auto'>No projects found</h5>
          <FullButton tag={Link} to='/new' color='primary' className='mx-auto mt-4 mb-5' size='lg'>
            Add a new project&nbsp;&nbsp;<i className='fa fa-arrow-right' aria-hidden='true' />
          </FullButton>
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
