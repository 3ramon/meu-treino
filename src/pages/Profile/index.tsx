import { useNavigate } from "react-router-dom";
import "./style.css";

import { useContext } from "react";
import { UserContext } from "../../context/userContext";

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
                    Olá, {user.name}!
                    <ul>
                        <li>Email: {user.email}</li>
                        <li>Idade: {user.age}</li>
                        <li>Seu plano está: {user.planoAtivo ? "Ativo!" : "Desativado"}</li>
                    </ul>
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
