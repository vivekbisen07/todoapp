import React from 'react'

export default function Todoitem({todo,removeTodo}) {
  return (
    <div>
      <h1 id='span'>{todo.text}</h1>
      <button id='btn-2' onClick={()=>removeTodo(todo.id)}>Remove</button>
    </div>
  )
}
