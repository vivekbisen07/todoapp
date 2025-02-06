import React, { useState } from 'react'
import Todoitem from './Todoitem';
import './todo.css';

export default function Todolist() {


    const [todos,setTodos]=useState([]);
    const [inputvalue,setIputvalue]=useState('');

    const addTodo=()=>{
      const newTodo={id: Math.random() ,text:inputvalue}
      setTodos((values)=> [...values,newTodo])
      setIputvalue('');
    }

    const removeTodo =(id)=>{
      setTodos(todos.filter((todo)=>todo.id !==id))
    }
    
  return (
    <div id='main'>
      <form >
  <input type="text"
    value={inputvalue}
    onChange={(e)=>setIputvalue(e.target.value)}
    />
    <input id='btn' type="button" value="Add Task" onClick={addTodo} />
      </form>
      <div>
        {todos.map((todo)=>(
          <Todoitem key={todo.id} todo={todo} removeTodo={removeTodo}/>
        ))}
      </div>
    </div>
  )
}
