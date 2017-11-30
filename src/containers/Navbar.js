import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Navbar from '../components/Navbar'

const PrimaryNavbar = ({ auth, ...rest }) => (
  <Navbar isAuthenticated={auth.isAuthenticated} user={auth.user} {...rest} />
)

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default withRouter(connect(mapStateToProps, null)(PrimaryNavbar))
