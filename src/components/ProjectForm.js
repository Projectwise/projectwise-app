import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Header, Segment, Form } from 'semantic-ui-react'

import FormPage from './FormPage'
import { saveProject } from '../actions/project'

class ProjectForm extends Component {

  state = {}

  handleChange = (e, { name, value }) => {
    const checkboxes = ['logoHelp', 'uiHelp', 'uxHelp']
    if(checkboxes.indexOf(name) > -1) {
      value = true
    }
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.saveProject(this.state)
      .then(() => {
        console.log('Saved')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render(){
    // if(!this.props.isAuthenticated) {
    //   return (<Redirect to='/login' />)
    // }
    return (
      <FormPage>
        <Header as='h1' textAlign='center'>Add a new project</Header>
        <Form className='margin-top' onSubmit={this.handleSubmit}>
          <Form.Input
            label='Project Name'
            name='name'
            placeholder='Enter project name'
            required
            onChange={this.handleChange}
          />
          <Form.Input
            label='Project Url'
            name='projectUrl'
            placeholder='Enter project url'
            required
            onChange={this.handleChange}
          />
          <Form.TextArea
            label='Project description'
            placeholder='Tell us something about your project'
            name='description'
            required
            onChange={this.handleChange}
          />
          <Form.Input
            label='Project homepage'
            name='homepage'
            placeholder='Enter project url'
            onChange={this.handleChange}
          />
          <Form.Group inline>
            <label>Help required with </label>
            <Form.Checkbox label='Logo' name='logoHelp' onChange={this.handleChange} />
            <Form.Checkbox label='UI' name='uiHelp' onChange={this.handleChange} />
            <Form.Checkbox label='UX' name='uxHelp' onChange={this.handleChange} />
          </Form.Group>
          <Form.TextArea
            label='Help description'
            placeholder='Describe the help your project needs.'
            name='helpDescription'
            onChange={this.handleChange}
          />
          <Segment basic padded textAlign='center'>
            <Form.Button color='teal' size='large'>Add project</Form.Button>
          </Segment>
        </Form>
      </FormPage>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

export default connect(mapStateToProps, {saveProject})(ProjectForm)
