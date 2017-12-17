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
import colors from '../../styles/colors'

const WrapperContainer = styled(Container)`
  min-height: calc(100vh - 140px);
`

const FullButton = styled(Button)`
  font-size: 1rem;
  font-weight: bold;
`

const Header = styled.h4`
  color: ${props => props.color || colors.white}
  font-weight: 600;
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
        <WrapperContainer color={colors.white} className='d-flex flex-column align-items-center justify-content-center'>
          <div>
            <h4>No projects found</h4>
            <FullButton tag={Link} to='/new' color='primary' className='mx-auto mt-4 mb-5' size='lg'>
              Add a new project&nbsp;&nbsp;<i className='fa fa-arrow-right' aria-hidden='true' />
            </FullButton>
          </div>
        </WrapperContainer>
      )
    }
    return (
      <WrapperContainer color={colors.white} className='py-5'>
        <Header color={colors.light} className='mb-4'>All Projects </Header>
        {projectsChunk.map((projectIds) => (
          <ProjectRow key={projectIds[0]} projects={projectIds.map(id => projectsById[id])} />
        ))}
      </WrapperContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects
})

export default connect(mapStateToProps, { getProjects })(ProjectList)
