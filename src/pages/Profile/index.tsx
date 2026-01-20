import { useNavigate } from "react-router-dom";
import "./style.css";

import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import NavBar from "../../components/NavBar";

export default function Profile() {
    const { user, logout } = useContext(UserContext);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/`);
    };

    return (
        <>
        {/* organizar perfil - lembrar de descomentar protected routes */}
            <NavBar isShop={false} />
            <div className="container">
                {user ? (
                    <span className="UserLogado">
                        Olá, {user.name}!
                        <ul>
                            <li>Email: {user.email}</li>
                            <li>Idade: {user.age}</li>
                            <li>
                                Seu plano está:{" "}
                                {user.planoAtivo ? "Ativo!" : "Desativado"}
                            </li>
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
            </div>
        </>
    );
}
