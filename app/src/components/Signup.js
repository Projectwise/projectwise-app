import React, { Component } from 'react'
import { Header, Form, Input, Button, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import FormPage from './FormPage'

class Signup extends Component {
  render(){
    return(
      <FormPage>
        <Header as='h1' textAlign='center'>Join Projectwise</Header>
        <p className='text-center'>By signing up, you agree to all the terms and conditions</p>
          <Form className='signup-form'>
            <Form.Group widths='equal'>
              <Form.Field>
                <Input placeholder='First name' required />
              </Form.Field>
              <Form.Field>
                <Input placeholder='Last name' required />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <Input type='email' placeholder='Email address' />
            </Form.Field>
            <Form.Group widths='equal'>
              <Form.Field>
                <Input type='password' placeholder='Password' />
              </Form.Field>
              <Form.Field>
                <Input type='password' placeholder='Retype Password' />
              </Form.Field>
            </Form.Group>
            <Form.TextArea placeholder='Tell us more about you...' />
            <Segment basic padded textAlign='center'>
              <Button color='teal' size='large'>Create my account</Button>
            </Segment>
          </Form>
          <Segment basic>
            <h5 className='text-center'>
              If you already have an account, please <Link to='/login'>login</Link> here.
            </h5>
          </Segment>
      </FormPage>
    )
  }
}

export default Signup
