import React, { Component } from 'react'
import { Container, Header, Segment, Divider, Label, Grid, Icon } from 'semantic-ui-react'
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
          <Container className='padding-top'>
            <Container text>
              <Header as='h1' textAlign='center'>
                {project.name}
              </Header>
              <Divider />
            </Container>
            <Segment basic>
              <Grid>
                <Grid.Column width={11}>
                  <Header as='h3'>Description</Header>
                  <p>{project.description}</p>
                  <Header as='h3'>Help description</Header>
                  <p>{project.helpDescription}</p>
                </Grid.Column>
                <Grid.Column width={5}>
                  <div>
                    <Icon name='github'/>URL<span className='float-right'>
                      <a href={project.meta.projectUrl}>Go to project</a>
                    </span>
                  </div>
                  <Divider />
                  <div>
                    <Icon name='tag'/>
                    Tags
                    {(project.helpFields.logo) ? <Label className='float-right' horizontal>Logo</Label> : null }
                    {(project.helpFields.ui) ? <Label className='float-right' horizontal>UI</Label> : null }
                    {(project.helpFields.logo) ? <Label className='float-right' horizontal>UX</Label> : null }
                  </div>
                  <Divider />
                  {(project.meta.homepage) ?
                    <div>
                      <Icon name='globe' />Homepage<span className='float-right'>
                        <a href={project.meta.homepage}>Go to homepage</a>
                      </span>
                      <Divider />
                    </div> : null
                  }
                </Grid.Column>
              </Grid>
            </Segment>
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
