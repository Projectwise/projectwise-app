import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{pathname: '/login'}} />
    )}
  />
)

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default withRouter(connect(mapStateToProps, null)(PrivateRoute))
