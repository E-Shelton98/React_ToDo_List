import React from 'react'

export default function TodoItem(props) {
  return (
    <div>
      <p>{props.todo.title}</p>
    </div>
  )
}
