import React, { Component } from 'react'
import { Form, FormGroup, Col, Button } from 'reactstrap'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import styled from 'styled-components'

import validate from '../../config/validator'
import { TextInput } from '../../components/Input'
import firebase from '../../firebase'

const FullButton = styled(Button)`
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
`

class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit (values, dispatch) {
    const userDetails = {
      email: values.email,
      password: values.password
    }
    console.log(values)
    firebase.auth().signInWithEmailAndPassword(values.email, values.password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode, errorMessage)
    })
  }

  render () {
    const { handleSubmit, submitting } = this.props
    return (
      <Form className='mt-1 floating-labels' onSubmit={handleSubmit(this.submit)}>
        <Field
          helpBlock
          name='email'
          type='email'
          id='email'
          label='Email'
          component={TextInput}
          validate={[validate.required, validate.email]}
        />
        <Field
          helpBlock
          name='password'
          type='password'
          id='password'
          label='Password'
          component={TextInput}
          validate={[validate.required]}
        />
        <FormGroup row className='pb-2'>
          <Col lg={12}>
            <label htmlFor='remember' className='custom-control custom-checkbox'>
              <input id='remember' type='checkbox' className='custom-control-input' />
              <span className='custom-control-indicator' />
              <span className='custom-control-description'>Remember Me</span>
            </label>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={6}>
            <FullButton
              color='primary'
              type='submit'
              disabled={submitting}
            >
              Login&nbsp;&nbsp;<i className='fa fa-arrow-right' aria-hidden='true' />
            </FullButton>
          </Col>
          <Col lg={6}>
            <FullButton color='secondary'>
              <i className='fa fa-github' aria-hidden='true' />&nbsp;&nbsp;Login with Github
            </FullButton>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default reduxForm({ form: 'LoginForm' })(LoginForm)
