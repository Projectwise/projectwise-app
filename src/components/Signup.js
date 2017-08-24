import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header, Form, Input, Button, Segment } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import signupAction from '../actions/auth/signup'
import FormPage from './FormPage'

class Signup extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    verifyPassword: '',
    errors: {},
    loading: false,
    done: false
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const userDetails = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }

    console.log('credentials', userDetails)
    this.props.signupAction(userDetails)
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    if(this.props.isAuthenticated) return (
      <Redirect to='/' />
    )
    else {
      return (
        <FormPage centered>
          <Header as='h1' textAlign='center'>Create your Account</Header>
          <p className='text-center'>By signing up, you agree to all the terms and conditions</p>
            <Form className='margin-top' onSubmit={this.handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Field>
                  <Input
                    name='firstName'
                    placeholder='First name'
                    onChange={this.handleChange}
                    required
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    name='lastName'
                    placeholder='Last name'
                    onChange={this.handleChange}
                    required
                  />
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <Input
                  type='email'
                  name='email'
                  placeholder='Email address'
                  onChange={this.handleChange}
                  required
                />
              </Form.Field>
              <Form.Group widths='equal'>
                <Form.Field>
                  <Input
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={this.handleChange}
                    required
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    type='password'
                    name='verifyPassword'
                    placeholder='Retype Password'
                    onChange={this.handleChange}
                    required
                  />
                </Form.Field>
              </Form.Group>

              <Segment basic padded textAlign='center'>
                <Button primary size='large'>Create my account</Button>
                  <h5 className='text-center'>
                    If you already have an account, please <Link to='/login'>login</Link> here.
                  </h5>
              </Segment>
            </Form>
        </FormPage>
      )
    }
  }
}

Signup.propTypes = {
  isAuthenticated: PropTypes.bool,
  signupAction: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

export default connect(mapStateToProps, { signupAction })(Signup)
