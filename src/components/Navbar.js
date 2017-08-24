import React from 'react'
import PropTypes from 'prop-types'
import { Container, Segment, Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import RightNav from './RightNav'
import { getNavbarClassFromType } from '../utils'
import logo from '../images/Logo.png'

const Navbar = (props) => {
  let {type, user, inverted} = props
  let navbarType = 'navbar'
  let children = null

  if(type) {
    navbarType = getNavbarClassFromType(type)
    children = (navbarType === 'masthead' && props.children) ? props.children : null
  }

  return (
    <Container fluid>
      <Segment basic className={navbarType}>
        <Menu inverted secondary size='large'>
            <Menu.Item header>
              <Image as={Link} to='/' size='small' src={logo}/>
            </Menu.Item>
            <RightNav/>
          </Menu>
          {children}
      </Segment>
    </Container>
  )
}

Navbar.propTypes = {
  user: PropTypes.object,
  inverted: PropTypes.bool,
  type: PropTypes.string,
  children: PropTypes.node
}

export default Navbar
