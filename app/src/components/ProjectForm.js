import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Header, Segment, Form } from 'semantic-ui-react'

import FormPage from './FormPage'

class ProjectForm extends Component {
  render(){
    if(!this.props.isAuthenticated) {
      return (<Redirect to='/login' />)
    }
    return (
      <FormPage>
        <Header as='h1' textAlign='center'>Add a new project</Header>
        <Form className='form-padded'>
          <Form.Input
            label='Project Name'
            name='name'
            placeholder='Enter project name'
            required
          />
          <Form.Input
            label='Project Url'
            name='projectUrl'
            placeholder='Enter project url'
            required
          />
          <Form.TextArea
            label='Project description'
            placeholder='Tell us something about your project'
            name='description'
            required
          />
          <Form.Input
            label='Project homepage'
            name='homepage'
            placeholder='Enter project url'
          />
          <Form.Group inline>
            <label>Help required with </label>
            <Form.Checkbox label='Logo' value='logoHelp' />
            <Form.Checkbox label='UI' value='uiHelp' />
            <Form.Checkbox label='UX' value='uxHelp' />
          </Form.Group>
          <Form.TextArea
            label='Help description'
            placeholder='Describe the help your project needs.'
            name='helpDescription'
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
    isAuthenticated: state.loginState.isAuthenticated
  }
}

export default connect(mapStateToProps, null)(ProjectForm)
