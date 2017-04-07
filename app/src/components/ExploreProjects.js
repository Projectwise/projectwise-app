import React, { Component } from 'react'
import { Card, Container, Segment, Dimmer, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'

import Navbar from './Navbar'
import ProjectCard from './ProjectCard'
import { fetchProjects } from '../actions/project'


class Explore extends Component {

  state = {
    projects: null
  }

  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    console.log('props', this.props)
    return (
      <Container fluid>
        <Segment basic inverted className='navbar-bg'>
          <Navbar inverted/>
        </Segment>
        <Container>
          {
            (this.props.isLoading) ?
              <Dimmer active inverted>
                <Loader content='Loading' />
              </Dimmer> :
              <Card.Group>
                {this.props.projects.map((project) => (
                  <ProjectCard
                    key={project._id}
                    project={project}
                  />
                ))}
              </Card.Group>
            }
        </Container>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.projects.isLoading,
    projects: state.projects.list
  }
}

export default connect(mapStateToProps, { fetchProjects })(Explore)
