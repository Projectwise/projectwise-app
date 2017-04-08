import React, { Component } from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { fetchProject } from '../actions/project'
import Navbar from './Navbar'


class Project extends Component {

  state = {
    project: this.props.project
  }

  componentDidMount() {
    if(!this.state.project) {
      this.props.fetchProject(this.props.match.params.projectId)
    }
  }

  componentWillReceiveProps(nextProps) {
      if(nextProps.project) {
        this.setState({project: nextProps.project})
      }
  }

  render() {
    console.log(this.props)
    const project = this.state.project

    if(!project) {
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
            <Header as='h1'>{project.name}</Header>
            <p>{project.description}</p>
          </Container>
        </Container>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("Store state", state)
  if(state.projects.items ){
    return {
      project: state.projects.items[ownProps.match.params.projectId]
    }
  } else {
    return {
      project: null
    }
  }
}

export default connect(mapStateToProps, {fetchProject})(Project)
