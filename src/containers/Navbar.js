import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import logout from '../store/actions/logout'

import Navbar from '../components/Navbar'

const PrimaryNavbar = ({ auth, logout, ...rest }) => (
  <Navbar
    isAuthenticated={auth.isAuthenticated}
    user={auth.user}
    onLogout={logout}
    {...rest}
  />
)

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default withRouter(connect(mapStateToProps, {logout})(PrimaryNavbar))
