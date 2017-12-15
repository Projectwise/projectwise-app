import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {
  Collapse,
  Navbar as RNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink as RNavLink
} from 'reactstrap'

import Container from '../Container'
import logo from '../../assets/images/logo.png'

const Navbar = styled(RNavbar)`
  min-height: 70px;
`
const NavbarContainer = styled(Container)`
  background: linear-gradient(to right, #141E30, #243B55);
`

class Primary extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  rightNav (isAuthenticated, user) {
    if (isAuthenticated) {
      return (
        <Nav className='ml-auto' navbar>
          <RNavLink
            tag={NavLink}
            to='/new'
            activeClassName='active'
          >
            Add Project
          </RNavLink>
          <RNavLink
            tag={NavLink}
            to='/account'
            activeClassName='active'
          >
            My Account
          </RNavLink>
        </Nav>
      )
    } else {
      return (
        <Nav className='ml-auto' navbar>
          <RNavLink
            tag={NavLink}
            to='/login'
            activeClassName='active'
          >
            Login
          </RNavLink>
          <RNavLink
            tag={NavLink}
            to='/signup'
            activeClassName='active'
          >
            Signup
          </RNavLink>
        </Nav>
      )
    }
  }

  render () {
    const { isAuthenticated, user, children } = this.props
    console.log(user)
    return (
      <NavbarContainer fluid>
        <Navbar dark expand='md'>
          <NavbarBrand
            tag={Link}
            to='/'
          >
            <img src={logo} alt='' />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.rightNav(isAuthenticated, user)}
          </Collapse>
        </Navbar>
        {children || null}
      </NavbarContainer>
    )
  }
}

export default Primary
