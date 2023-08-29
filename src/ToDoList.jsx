import { ToDoItem } from "./ToDoItem";

export function ToDoList({ todos }) {
    return (
        <ul className="list">
            {todos.length === 0 && "No ToDos"}
            {todos.map(todo => (
                <ToDoItem
                    id={todo.id}
                    completed={todo.completed}
                    title={todo.title}
                    key={todo.id}
                />
            ))}
        </ul>
    );
}