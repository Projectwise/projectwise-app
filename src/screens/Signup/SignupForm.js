import React, { Component } from 'react'
import { Form, FormGroup, Col, Button } from 'reactstrap'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import styled from 'styled-components'

import validate from '../../config/validator'
import { TextInput } from '../../components/Input'

import API from '../../api'
import signup from '../../store/actions/signup'

const FullButton = styled(Button)`
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
`

class SignupForm extends Component {
  constructor (props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit (values, dispatch) {
    const userDetails = {
      name: values.name,
      email: values.email,
      password: values.password
    }
    console.log(values)
    return API.login(userDetails)
      .then((response) => {
        if (response.status !== 200) {
          const errors = response.data.errors.details.errors
          if (errors.email) {
            throw new SubmissionError({
              email: errors.email.msg,
              _error: 'Something went wrong'
            })
          }
        } else {
          dispatch(signup(response.data.user))
        }
      })
  }

  render () {
    const { handleSubmit, submitting } = this.props
    return (
      <Form className='mt-1' onSubmit={handleSubmit(this.submit)}>
        <Field
          helpBlock
          name='name'
          id='name'
          label='Full Name'
          component={TextInput}
          validate={[validate.required]}
        />
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
              <span className='custom-control-description'>I agree to all the terms and conditions</span>
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
              Signup&nbsp;&nbsp;<i class='fa fa-arrow-right' aria-hidden='true' />
            </FullButton>
          </Col>
          <Col lg={6}>
            <FullButton color='secondary'>
              <i class='fa fa-github' aria-hidden='true' />&nbsp;&nbsp;Signup with Github
            </FullButton>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default reduxForm({ form: 'SignupForm' })(SignupForm)
