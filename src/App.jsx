import "./style.css";
import { useState } from "react";
import { NewToDoForm } from "./NewToDoForm";
import { ToDoList } from "./ToDoList";

export default function App() {
    const [todos, setToDos] = useState([]);

    function addToDo(title) {
        setToDos(currentTodos => [
            ...currentTodos,
            { id: crypto.randomUUID(), title, completed: false },
        ]);
    }

    function toogleTodo(id, completed) {
        setToDos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed };
                }
                return todo;
            });
        });
    }

    function deleteTodo(id) {
        setToDos(currentTodos => currentTodos.filter(todo => todo.id !== id));
    }

    return (
        <>
            <NewToDoForm onSubmit={addToDo} />
            <ToDoList todos={todos} />
        </>
    );
}