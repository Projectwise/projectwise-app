import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Navbar as RNavbar,
  Nav,
  NavItem
} from 'reactstrap'

import Container from '../Container'

const Navbar = styled(RNavbar)`
  min-height: 60px;
`
const NavbarContainer = styled(Container)`
  background: linear-gradient(to right, #141E30, #243B55);
`

class Footer extends Component {
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

  render () {
    const { children } = this.props
    return (
      <NavbarContainer fluid>
        <Navbar dark expand='md'>
          <Nav navbar>
            <NavItem className='float-left'>
              Created by <a href='#'>Yogesh&nbsp;Kumar</a>
            </NavItem>
          </Nav>
        </Navbar>
        {children || null}
      </NavbarContainer>
    )
  }
}

export default Footer
