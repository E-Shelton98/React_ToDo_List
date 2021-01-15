import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {
  return props.todos.map((todo) => <TodoItem todo={todo}/>)
}

export default Todos
