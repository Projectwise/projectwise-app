import React, { Component } from 'react'
import { Card, Container, Segment, Dimmer, Loader, Grid} from 'semantic-ui-react'
import { connect } from 'react-redux'

import Navbar from './Navbar'
import ProjectCard from './ProjectCard'
import { fetchProjects } from '../actions/project'


class Explore extends Component {

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
              <Segment basic>
                <Grid columns={3} padded>
                  {Object.keys(this.props.projects).map((projectId) => (
                    <Grid.Column>
                      <ProjectCard
                        key={this.props.projects[projectId]._id}
                        project={this.props.projects[projectId]}
                      />
                    </Grid.Column>
                  ))}
                </Grid>
              </Segment>
            }
        </Container>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.projects.isLoading,
    projects: state.projects.items
  }
}

export default connect(mapStateToProps, { fetchProjects })(Explore)
