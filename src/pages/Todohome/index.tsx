import { useState } from "react";
import { TodoForm } from "../../components/TodoForm/index";
import { TodoList } from "../../components/TodoList/index";
import TodoItem from "../../TodoInterface";
import NavBar from "../../components/NavBar";

export default function Todohome() {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    function addTodo(text: string) {
        const newTodo: TodoItem = {
            id: Math.floor(Math.random() * 1000),
            nome: text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    }

    function handleToggleTodo(idTodo: number) {
        const newTodos = todos.map((todo) =>
            idTodo === todo.id ? { ...todo, completed: !todo.completed } : todo,
        );
        setTodos(newTodos);
    }

    return (
        <>
            <NavBar isShop={false} />
            <div className="App">
                <h1>Lista de tarefas</h1>

                <TodoForm adicionar={addTodo} />

                <div className="todo-list">
                    <TodoList todos={todos} onToggle={handleToggleTodo} />
                </div>

                {todos.length === 0 && <p>Nenhuma tarefa adicionada ainda</p>}
            </div>
        </>
    );
}
