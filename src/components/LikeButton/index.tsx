import "./style.css";
import { useState } from "react";

interface ButtonProps {
    name: string;
    contagemInicial?: number;
    // onClick: () => void;
}

export function LikeButton({ name, contagemInicial }: ButtonProps) {
    const [likes, setLikes] = useState(contagemInicial || 0);

    return (
        <>
            <button className="btnLol" onClick={() => setLikes(likes + 1)}>
                {name}
            </button>
            <div>Likes = {likes}</div>
        </>
    );
}
