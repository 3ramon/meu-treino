import "./style.css";
import TodoItem from "../../TodoInterface";

interface TodoPropsList {
    todos: TodoItem[];
    onToggle: (index: number) => void;
}

export function TodoList({ todos, onToggle }: TodoPropsList) {
    return (
        <>
            {todos.map((item) => (
            
                <div key={item.id}>
                    <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => onToggle(item.id)}
                    />
                    <label
                        style={{
                            textDecoration: item.completed
                                ? "line-through"
                                : "none",
                            color: item.completed ? "#888" : "#000000ff",
                        }}
                    >
                        {item.nome}
                    </label>
                </div>
            ))}
        </>
    );
}
