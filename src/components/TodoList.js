import TodoItem from "./TodoItem";
import { useTodoState } from "./TodoContext";

export default function TodoList(){

    const todos = useTodoState();

    return(
        <div className="todoList">
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                 />
            ))}
        </div>
    );
}