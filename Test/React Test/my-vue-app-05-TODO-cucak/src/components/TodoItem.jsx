const TodoItem = ({ todo }) => {
    return (
        <div>
            <label key={todo.id} className="todo">
                <input type="checkbox" />
                {todo.text}
                <button onClick={() => onDelete(todo.id)}> X </button>
            </label>
        </div>
    );
};

export default TodoItem;