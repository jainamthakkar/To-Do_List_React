export function ToDoItem({ completed, id, title }) {
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    // Add the onChange handler here
                />
                {title}
            </label>
            <button
                // Add the onClick handler here
                className="btn btn-danger"
            >
                Delete
            </button>
        </li>
    );
}