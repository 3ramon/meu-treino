import "./style.css";
import { useState } from "react";

interface TodoProps {
    adicionar: (text: string) => void;
}

export function TodoForm({ adicionar }: TodoProps) {
    const [inputValue, setInputValue] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    function handleClick() {
        if (inputValue !== "") {
            adicionar(inputValue);
            setInputValue("");
        }
    }

    function addEnter(event: React.KeyboardEvent) {
        if (event.key === 'Enter') {
            handleClick();
        }
    }

    return (
        <div className="inputItens">
            <input
                type="text"
                placeholder="Digite sua tarefa"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={addEnter}
            />
            <button onClick={handleClick}>Adicionar</button>
        </div>
    );
}