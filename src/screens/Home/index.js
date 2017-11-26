import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'

import Container from '../../components/Container'

class Home extends Component {
  render () {
    return (
      <Container fluid>
        <h1>Home</h1>
      </Container>
    )
  }
}

export default Home
