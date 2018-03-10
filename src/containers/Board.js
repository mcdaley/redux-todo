//-----------------------------------------------------------------------------
// src/containers/Board.js
//-----------------------------------------------------------------------------
import { connect }  from 'react-redux'
import App          from '../App'

const mapStateToProps = state => ({
  message: state.message,
})

const Board = connect(
  mapStateToProps,
)(App)

export default Board