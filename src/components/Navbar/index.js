import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {
  Collapse,
  Navbar as RNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink as RNavLink,
  NavItem as RNavItem,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle as RDropdownToggle,
  DropdownItem
} from 'reactstrap'

import Container from '../Container'
import logo from '../../assets/images/logo.png'

const Navbar = styled(RNavbar)`
  min-height: 70px;
`
const NavbarContainer = styled(Container)`
  background: linear-gradient(to right, #141E30, #243B55);
`

const DropdownToggle = styled(RDropdownToggle)`
  font-weight: 400;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  border: none;

  &:hover {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }

  &:active {
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }
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

  rightNav (isAuthenticated, user, onLogout) {
    if (isAuthenticated) {
      return (
        <Nav className='ml-auto' navbar>
          <RNavLink href='https://github.com/Projectwise/'>Github</RNavLink>
          <RNavLink
            tag={NavLink}
            to='/new'
            activeClassName='active'
          >
            Add Project
          </RNavLink>
          <RNavItem>
            <UncontrolledDropdown>
              <DropdownToggle caret>
                My Account
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem onClick={onLogout}>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </RNavItem>
        </Nav>
      )
    } else {
      return (
        <Nav className='ml-auto' navbar>
          <RNavLink href='https://github.com/Projectwise/'>
            Github <i className='fa fa-github' />
          </RNavLink>
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
    const { isAuthenticated, user, onLogout, children } = this.props
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
            {this.rightNav(isAuthenticated, user, onLogout)}
          </Collapse>
        </Navbar>
        {children || null}
      </NavbarContainer>
    )
  }
}

export default Primary
