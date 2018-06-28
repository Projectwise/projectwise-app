import React, { Component } from 'react'
import { Form, FormGroup, Col, Button } from 'reactstrap'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import styled from 'styled-components'

import validate from '../../config/validator'
import { TextInput, SelectInput, TextArea } from '../../components/Input'

import API from '../../api'
import { addNotification } from '../../store/actions/notifications'
import { getProjects } from '../../store/actions/projects'

const FullButton = styled(Button)`
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
`

const Text = styled.h3`
  font-weight: bold;
`

class ProjectForm extends Component {
  constructor (props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit (values, dispatch) {
    const { reset } = this.props
    const projectDetails = {
      title: values.title,
      projectUrl: values.projectUrl,
      description: values.description,
      helpDescription: values.helpDescription,
      categories: values.categories.map(category => category.value)
    }
    console.log(values)
    return API.addProject(projectDetails)
      .then((response) => {
        if (response.status !== 200) {
          const errors = response.data.errors.details.errors
          if (errors.email) {
            throw new SubmissionError({
              title: errors.title.msg,
              _error: 'Something went wrong'
            })
          }
        } else {
          dispatch(addNotification({
            text: `New Project added`
          }))
          reset()
          dispatch(getProjects())
        }
      })
  }

  render () {
    const { handleSubmit, submitting } = this.props
    const options = {
      hint: this.props.hint || null
    }
    return (
      <Form className='my-5 py-4 px-3' onSubmit={handleSubmit(this.submit)}>
        <Text className='text-muted mb-4'>Add a new project</Text>
        <Field
          helpBlock
          name='title'
          id='title'
          label='Project Title'
          component={TextInput}
          validate={[validate.required]}
        />
        <Field
          helpBlock
          name='projectUrl'
          id='projectUrl'
          type='url'
          label='Project URL'
          component={TextInput}
          validate={[validate.required, validate.url]}
        />
        <Field
          helpBlock
          name='categories'
          id='categories'
          label='Categories'
          component={SelectInput}
          options={options}
          validate={[validate.required]}
        />
        <Field
          helpBlock
          name='description'
          id='description'
          rows='5'
          label='Project Description'
          placeholder='Describe your project'
          component={TextArea}
          validate={[validate.required]}
        />
        <Field
          helpBlock
          name='helpDescription'
          id='helpDescription'
          rows='5'
          label='Help Description (Make sure you add a link to the github issue.)'
          placeholder='Describe the help you require for the project'
          component={TextArea}
          validate={[validate.required]}
        />
        <FormGroup row>
          <Col lg={6}>
            <FullButton
              color='primary'
              type='submit'
              disabled={submitting}
            >
              Submit Project&nbsp;&nbsp;<i className='fa fa-arrow-right' aria-hidden='true' />
            </FullButton>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'ProjectForm',
  keepDirtyOnReinitialize: true,
  enableReinitialize: true
})(ProjectForm)
