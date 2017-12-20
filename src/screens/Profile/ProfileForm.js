import React, { Component } from 'react'
import { Form, FormGroup, Col, Button } from 'reactstrap'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import styled from 'styled-components'

import validate from '../../config/validator'
import { TextInput } from '../../components/Input'


const FullButton = styled(Button)`
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
`

class ProfileForm extends Component {
  constructor (props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit (values, dispatch) {
    console.log(values)
  }

  render () {
    const { handleSubmit, submitting, auth } = this.props
    console.log("####", auth)
    return (
      <Form className='mt-1' onSubmit={handleSubmit(this.submit)}>
        <Field
          helpBlock
          name='name'
          id='name'
          label='Full Name'
          component={TextInput}
          validate={[validate.required]}
          value={auth.user.name}
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
        <FormGroup row>
          <Col lg={6}>
            <FullButton
              color='primary'
              type='submit'
              disabled={submitting}
            >
              Update Profile&nbsp;&nbsp;<i className='fa fa-arrow-right' aria-hidden='true' />
            </FullButton>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default reduxForm({ form: 'ProfileForm' })(ProfileForm)
