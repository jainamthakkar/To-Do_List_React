import "./style.css"
import { useState } from "react"
import { NewToDoForm } from "./NewToDoForm";

export default function App() {

  const [todos, setToDos] = useState([]);

  function addToDo(title){
    setToDos(currentTodos => {
      return [
          ...currentTodos,
          { id: crypto.randomUUID(), title, completed: false },
      ]
  })
  }

  function toogleTodo(id, completed) {
    setToDos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo;
      })
    })
  }

  function deleteTodo(id){
    setToDos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return <>

    <NewToDoForm onSubmit={addToDo}/>
    <h1 className="header">To Do List</h1>
    <ul className="list">
      {todos.length === 0 && "No ToDos"} 

      {todos.map(todo => {
        return <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={e => toogleTodo(todo.id, e.target.checked)}
            />
            {todo.title}
          </label>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </li>
      })}

    </ul>
  </>
}