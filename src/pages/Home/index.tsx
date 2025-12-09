import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Home() {
    const navigate = useNavigate();

    const handleClick = (route: any) => {
        navigate(`/${route}`);
    };

    return (
        <div className="container">
            Olá!!
            <button
                className="ButtonNavigation"
                onClick={() => handleClick("ToDo")}
            >
                Ir para To Do
            </button>
            <button
                className="ButtonNavigation"
                onClick={() => handleClick("FormUser")}
            >
                Ir para o Formulário!
            </button>
            <button
                className="ButtonNavigation"
                onClick={() => handleClick("Profile")}
            >
                Ir para o Perfil!
            </button>
        </div>
    );
}
