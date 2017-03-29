import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/Logo.png'

class Navbar extends Component {
  render() {
    console.log(this.props)
    return (
      <Menu className='navbar' secondary inverted={this.props.inverted} size='large'>
        <Menu.Item header>
          <Image as={Link} to='/' size='small' src={logo}/>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as={NavLink} to='/projects'>Projects</Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar
