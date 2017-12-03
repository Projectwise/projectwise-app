import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Card } from 'reactstrap'
import _ from 'lodash'

import Container from '../../components/Container'
import Preloader from '../../components/Preloader'
import colors from '../../styles/colors'
import { getProjects } from '../../store/actions/projects'

const WrapperContainer = styled(Container)`
  width: 100%;
  height: 100%;
`

const ContentContainer = styled(Container)`
  max-width: 600px
`

class ProjectList extends Component {

  componentDidMount() {
    this.props.getProjects()
  }

  render() {
    const projects = this.props.projects.all.map(this.props.projects.byIds)
    const projectsChunk = _.chunk(array, [size=3])

    if(this.props.projects.isLoading) {
      return <Preloader />
    }
    if(projects && projects.length === 0 ) {
      return (
        <WrapperContainer>
          <h5 className='mx-auto my-auto'>No projects found</h5>
        </WrapperContainer>
      )
    }
    return (
      <ContentContainer className='mt-3' color={colors.light}>
        {projectsChunk.map(projects => (
          <ProjectRow key={project.id} projects={projects} />
        ))}
      </ContentContainer>
    )
  }
}

export default ProjectList
