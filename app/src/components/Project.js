import React, { Component } from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'

import Navbar from './Navbar'

const fetchProjectFromState = (projects, projectId) => {
  projects.forEach((project) => {
    if(project.slug === projectId) {
      console.log(project)
      return project
    } else {
      return null
    }
  })
}

class Project extends Component {

  state = {
    project: {}
  }

  componentDidMount() {
    if(this.props.projects) {
      this.setState({project: fetchProjectFromState(
        this.props.projects,
        this.props.match.params.projectId
      )})
    }
  }

  render() {
    console.log(this.props)
    const project = this.state.project

    if(!this.state.project) {
      return (
        <Container fluid>
          <Segment basic inverted className='navbar-bg'>
            <Navbar inverted/>
          </Segment>
          <Header as='h1'>Page not available</Header>
        </Container>
      )
    } else {
      return (
        <Container fluid>
          <Segment basic inverted className='navbar-bg'>
            <Navbar inverted/>
          </Segment>
          <Container text>
            <Header as='h1'>{project.title}</Header>
            <p>{project.description}</p>
          </Container>
        </Container>
      )
    }
  }
}

const mapStateToProps = (state) => {
  console.log("Store state", state)
  return {
    projects: state.projects.list
  }
}

export default connect(mapStateToProps, null)(Project)
