import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import qs from 'qs'

import Container from '../../components/Container'
import Navbar from '../../containers/Navbar'
import colors from '../../styles/colors'
import API from '../../api'

import login from '../../store/actions/login'
import { addNotification } from '../../store/actions/notifications'

const WrappedContainer = styled(Container)`
  min-height: calc(100vh - 130px);
`

const Text = styled.h3`
  font-weight: bold;
  padding-bottom: 1.2em;
`

class GithubAuth extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isAuthenticated: false,
      isError: false
    }
  }

  async componentDidMount () {
    const query = qs.parse(this.props.location.search.split('?')[1])
    const { addNotification, login } = this.props
    if (query.code) {
      try {
        const req = await API.githubToken(query.code)
        const accessToken = qs.parse(req.data.token)['access_token']
        console.log(accessToken)
        const authResponse = await API.githubAuthenticate(accessToken)
        login(authResponse.data.user)
        addNotification({
          text: `Successfully authenticated with Github`
        })
        this.setState({ isAuthenticated: true })
      } catch (e) {
        this.setState({ isError: true })
        addNotification({
          text: `Something went wrong, please try again.`
        })
      }
    }
  }

  render () {
    const { isAuthenticated, isError } = this.state

    if (isAuthenticated) {
      return <Redirect to='/' />
    }

    if (isError) {
      return <Redirect to='/login' />
    }
    return (
      <React.Fragment>
        <Navbar />
        <WrappedContainer fluid color={colors.light} className='py-5'>
          <Container className='mx-5 my-3 mx-auto'>
            <Text className='text-muted text-center mb-4'>Authenticating with Github</Text>
          </Container>
        </WrappedContainer>
      </React.Fragment>
    )
  }
}

export default connect(null, { login, addNotification })(GithubAuth)
