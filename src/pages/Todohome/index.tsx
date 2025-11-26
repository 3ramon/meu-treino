import React from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
// import "./App.css";
import { TodoForm } from "../../components/TodoForm/index";
import { TodoList } from "../../components/TodoList/index";
import TodoItem from "../../TodoInterface";

export default function Todohome() {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/FormUser");
    };

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
            idTodo === todo.id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    }

    return (
        <div className="App">
            <button className="RouterButton" onClick={handleClick}>Ir para Formulario</button>
            <h1>Lista de tarefas</h1>

            <TodoForm adicionar={addTodo} />

            <div className="todo-list">
                <TodoList todos={todos} onToggle={handleToggleTodo} />
            </div>

            {todos.length === 0 && <p>Nenhuma tarefa adicionada ainda</p>}
        </div>
    );
}
