import { useNavigate } from "react-router-dom";
import "./style.css";

import { useContext } from "react";
import { UserContext } from "../../context/useContext";

export default function Profile() {
    const { user, logout } = useContext(UserContext);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/`);
    };

    return (
        <div className="container">
            {user ? (
                <span className="UserLogado">
                    Olá, {user.nome}!<div>Email: {user.email}</div>
                    <button
                        onClick={() => {
                            logout();
                            handleClick();
                        }}
                        className="ButtonLogout"
                    >
                        Sair
                    </button>
                </span>
            ) : (
                <span className="UserDeslogado">Visitante</span>
            )}
            <button className="RouterButton" onClick={handleClick}>
                Voltar para Home
            </button>
        </div>
    );
}
