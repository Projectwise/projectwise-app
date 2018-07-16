import React, { Component } from 'react'
import postscribe from 'postscribe'

class Banner extends Component {
  componentDidMount () {
    postscribe('#amx-banner', `<script type='text/javascript' language='javascript' src='http://c.amazon-adsystem.com/aax2/assoc.js'></script>`)
  }

  render () {
    return (
      <div id='amx-banner' style={{display: 'flex', justifyContent: 'space-around', marginTop: '20px'}} />
    )
  }
}

export default Banner
