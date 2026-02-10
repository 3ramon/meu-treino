import "./style.css";

import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import NavBar from "../../components/NavBar";
import { useNavigation } from "../../hooks/useNavigation";

export default function Profile() {
    const { user, logout } = useContext(UserContext);

    const { handleNavigation } = useNavigation();
   
    return (
        <>
            {/* organizar perfil - lembrar de descomentar protected routes */}
            <NavBar isShop={false} />
            <div className="container_profile">
                {user && (
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
                                handleNavigation("");
                            }}
                            className="ButtonLogout"
                        >
                            Sair
                        </button>
                    </span>
                )}
            </div>
        </>
    );
}
