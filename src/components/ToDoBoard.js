//-----------------------------------------------------------------------------
// src/components/ToDoBoard.js
//-----------------------------------------------------------------------------
import React        from 'react'
import PropTypes    from 'prop-types'

function ToDoBoard(props) {
  const todos = [
    { id: 1, text: "Feed the dog",          completed: false },
    { id: 2, text: "Take out the garbage",  completed: false },
    { id: 3, text: "Do the dishes",         completed: true  },
  ]
  
  return (
    <div>
      <h2> My To Dos </h2>
      <p> 
        {props.message} 
      </p>
    </div>
  )
}

export default ToDoBoard