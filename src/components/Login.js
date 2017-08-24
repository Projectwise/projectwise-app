import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header, Form, Input, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import FormPage from './FormPage'

import loginAction from '../actions/auth/login'

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
    loading: false,
    done: false,
    isAuthenticated: false
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const credentials = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginAction(credentials)
  }

  componentWillReceiveProps(nextProps){
    if(this.props.isAuthenticated !== nextProps.isAuthenticated) {
      this.setState({isAuthenticated: nextProps.isAuthenticated})
    }
  }

  render() {
    if(this.state.isAuthenticated) return (
      <Redirect to='/' exact/>
    )
    else {
      return(
        <FormPage centered>
          <Header as='h1' textAlign='center'>Login to Your Account</Header>
          <Form className='margin-top' onSubmit={this.handleSubmit}>
            <Form.Field>
              <Input
                type='email'
                name='email'
                placeholder='Email address'
                onChange={this.handleChange}
                />
            </Form.Field>
            <Form.Field>
              <Input
                type='password'
                name='password'
                placeholder='Password'
                onChange={this.handleChange}
                />
            </Form.Field>
            <Segment basic padded textAlign='center'>
              <Form.Button primary size='large'>Go to my account</Form.Button>
              <h5><Link to='/forgot'>Forgot Password</Link></h5>
              <h5 className='center'>
                If you don't have an account, please <Link to='/signup'>signup</Link> here.
              </h5>
            </Segment>
          </Form>
        </FormPage>
      )
    }
  }
}

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  loginAction: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

export default connect(mapStateToProps, { loginAction })(Login)
