import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Navbar as RNavbar,
  Nav,
  NavItem as RNavItem
} from 'reactstrap'

import Container from '../Container'
import colors from '../../styles/colors'

const Navbar = styled(RNavbar)`
  min-height: 60px;
  width: 100%;
`
const NavbarContainer = styled(Container)`
  background: linear-gradient(to right, #141E30, #243B55);
`

const NavItem = styled(RNavItem)`
  color: ${colors.light};
  font-weight: 400;
`

const ColoredSpan = styled.span`
  color: ${colors.danger}
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
          <Nav navbar className='mx-auto'>
            <NavItem>
              Created with <ColoredSpan><i className='fa fa-heart' /></ColoredSpan> by <a href='https://twitter.com/itsyogesh18'>@itsyogesh18</a>
            </NavItem>
          </Nav>
        </Navbar>
        {children || null}
      </NavbarContainer>
    )
  }
}

export default Footer
