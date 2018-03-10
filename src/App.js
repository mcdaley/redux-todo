//-----------------------------------------------------------------------------
// src/App.js
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import ToDoBoard            from './components/ToDoBoard'

class App extends Component {
  render() {
    return (
      <ToDoBoard
       message = {this.props.message}
      />
    );
  }
}

/**
App.propTypes = {
  message: PropTypes.string.isRequired
}
**/

export default App;
