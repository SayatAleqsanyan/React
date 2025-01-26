import TodoItem from "./TodoItem";

const Todo = ({ todos }) => {     
    return (
        <div className="todos">
            {todos.map((todo) => {
                return (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                    />
                );
            })}
        </div>
    );
};

export default Todo;
