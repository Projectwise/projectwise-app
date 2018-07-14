import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from '../../styles/colors'

const ListItem = styled.li`
  align-items: 'flex-start';
  border-radius: 3px;
  display: flex;
  color: ${colors.white};
  padding: 0.75em 1em;
  box-shadow: 0px 2px 4px #8798A4

  &:not(:last-child) {
    margin: 0 0 12px;
  }
`
const Text = styled.p`
  flex: 1 1 auto;
  margin: 0 12px 0 0;
  overflow: hidden;
  text-overflow: ellipsis
`
const DismissButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  border: 0;
  color: ${colors.white};
  cursor: pointer;
  display: block;
  flex: 0 0 auto;
  padding: 0
`

class Notification extends Component {
  shouldComponentUpdate () {
    return false
  }
  render () {
    return (
      <ListItem style={{ backgroundColor: this.props.color }}>
        <Text>{this.props.text}</Text>
        <DismissButton onClick={this.props.onDismissClick}>x</DismissButton>
      </ListItem>
    )
  }
}

Notification.propTypes = {
  color: PropTypes.string.isRequired,
  onDismissClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Notification
