import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const Todos = () => {
    const [todos, setTodos] = useState([
        { id: Math.random(), text: "Learn React", isCompleted: false },
        { id: Math.random(), text: "Learn JavaScript", isCompleted: false },
        { id: Math.random(), text: "Learn HTML", isCompleted: false },
        { id: Math.random(), text: "Learn CSS", isCompleted: false },
    ]);

    const toggleCompletion = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            )
        );
    };

    
    return (
        <div className="todos">
            <TodoForm />
            <Todo todos={todos} toggleCompletion={toggleCompletion} />
        </div>
    );
};

export default Todos;
