import React, { useState } from 'react'
import './App.css'
//setsTodo is a function
const App = () => {
   const [todos, setTodos] = useState([
     {item: 'Need Dairy', category: 'BackLog', status : false},
     {item: 'Need Kitkat', category: 'BackLog', status : false},
     {item: 'Need Coke', category: 'BackLog', status : false},
     {item: 'Need Water', category: 'Completed', status : false}]
     )
    const handleAddTodo = (e)=>{
      e.preventDefault();
      setTodos (
        [...todos, {item: e.target.list.value, status: false, category: 'BackLog'}]
      ) 
      e.target.reset();
    }

    const todoStatusChange = (index)=>{
      // Creating new array rather than passing only reference (avoid mutation)
      let newTodo = [...todos]
      newTodo[index].status = !todos[index].status
      setTodos(newTodo)
    }

    const handleRemoveTodo = (index) => {
    let newTodo = [...todos]
    let todoBeforeRemove = newTodo.slice(0,index)
    let todoAfterRemove = newTodo.slice(index+1,newTodo.length+1 )
    if (newTodo[index].status) {
      setTodos([...todoBeforeRemove, ...todoAfterRemove ])
    } else {
      alert("Task not completed Yet")
      setTodos(newTodo)
    } 
    }
  return (  
    <div className = 'row'>
      <div className = 'addColumn'>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todo">Add Todo List</label><br/>
        <input id = "todo" type="text" name="list"/><br/>
        <button type="submit">Submit</button>
      </form>
      </div>
      <div className = 'column'>
        <h3>Backlog</h3>
      <ul>
      {todos.map((todo, index)=> (
       <li className="boxli" draggable key ={index}>{todo.item}
        {
         todo.status ? 
         <button className="marl10" onClick = {() => todoStatusChange(index)}>Mark as Incomplete</button>:
         <button className="marl10" onClick = {() => todoStatusChange(index)}>Mark as Complete</button>
        }
          <button onClick = {() => handleRemoveTodo(index)} className="marl10">Remove</button>
        </li>
      ))}
      </ul>
      </div>
      <div className = 'column'>
      <h3>Completed</h3>
      <ul>
      {todos.map((todo, index)=> (
       <li className="boxli" key ={index}>{todo.item}</li>
      ))}
      </ul>
      </div>
      
    </div>
  )
}

export default App
