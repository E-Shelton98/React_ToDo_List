import React from 'react'
import PropTypes from 'prop-types'

export default function TodoItem(props) {
  function getStyle() {
    if (props.todo.completed) {
      return {
        textDecoration: 'line-through',
      }
    } else {
      return {
        textDecoration: 'none',
      }
    }
  }
  
    return (
    <div style={getStyle()}>
      <p>{props.todo.title}</p>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
}
