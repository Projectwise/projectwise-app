import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Menu, Dropdown, Header, Button } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

import { logoutUser as logout } from '../actions/auth/logout'

class RightNav extends Component {
  state = {
    user: this.props.user || null
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.user) {
      this.setState({user: nextProps.user})
    }
  }

  render () {
    const user = this.state.user
    if (user) {
      console.log(user)
      const fullName = `${user.profile.firstName} ${user.profile.lastName}`

      return (
        <Menu.Menu position='right'>
          <Menu.Item href='//github.com/itsyogesh/Coinbox' target='_blank'>Github</Menu.Item>
          <Dropdown text={fullName} className='link item'>
            <Dropdown.Menu>
              <Dropdown.Header className='user-dropdown'>
                <Header as='h3'>{fullName}</Header>
                <p>{user.email}</p>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item icon='users' text='Invite Friends'/>
              <Dropdown.Item icon='setting' text='Account Settings' />
              <Dropdown.Item icon='power' text='Logout' onClick={this.props.logout} />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Menu.Item as={NavLink} to='/explore'>Explore</Menu.Item>
          <Menu.Item href='//github.com/itsyogesh/Coinbox' target='_blank'>Github</Menu.Item>
          <Menu.Item as={NavLink} to='/login'>Sign in</Menu.Item>
          <Menu.Item>
            <Button as={Link} to='/signup' inverted>Sign up</Button>
          </Menu.Item>
        </Menu.Menu>
      )
    }
  }
}

RightNav.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
}

const mapStateToProps = (state) => ({
  user: state.user.details
})

export default connect(mapStateToProps, { logout })(RightNav)
