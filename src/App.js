import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Root from './components/Root'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' component={Root} />
      </Router>
    );
  }
}

export default App;
