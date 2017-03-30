import React, { Component } from 'react'
import { Menu, Image, Button } from 'semantic-ui-react'
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
          <Menu.Item as={NavLink} to='/explore'>Explore</Menu.Item>
          <Menu.Item href='//github.com/itsyogesh/Projectwise' target='_blank'>Github</Menu.Item>
          <Menu.Item>
            <Button as={Link} to='/new' inverted>Add Project</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar
