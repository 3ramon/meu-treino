import { useNavigate } from "react-router-dom";
import "./style.css";
import NavBar from "../../components/NavBar";
import gitIcon from "../../assets/github.png";
import linkdIcon from "../../assets/linkedin.png";
import wppIcon from "../../assets/whatsapp.png";
import perfilImg from "../../assets/perfil.png";

export default function Home() {
    const navigate = useNavigate();

    const handleClick = (route: any) => {
        navigate(`/${route}`);
    };

    return (
        <div>
            <NavBar isShop={false} />

            <div className="page">
                <div className="container">
                    <h1 className="titulo">
                        Eleve seu negócio digital a outro nível
                        <strong className="titulo__destaque">
                            {" "}
                            com um Front-end de qualidade!
                        </strong>
                    </h1>

                    <p className="conteudo">
                        Olá! Sou Ramon Alves, desenvolvedor Front-end com
                        especialidade em React, HTML e CSS. Ajudo pequenos
                        negócios e designers a colocarem em prática boas ideias.
                        Vamos conversar?
                    </p>

                    <div className="links">
                        <h2 className="links__subtitulo">
                            Acesse minhas redes:
                        </h2>
                        <a
                            className="links__navegacao"
                            href="https://github.com/3ramon"
                        >
                            <img src={gitIcon} />
                            Github
                        </a>
                        <a
                            className="links__navegacao"
                            href="https://www.linkedin.com/in/ramonsoueu"
                        >
                            <img src={linkdIcon} />
                            linkedin
                        </a>
                        <a
                            className="links__navegacao"
                            href="https://wa.me/5544920022139"
                        >
                            <img src={wppIcon} />
                            Whatsapp
                        </a>
                    </div>
                </div>
                <img
                    className="apresentacao__imagem"
                    src={perfilImg}
                    alt="Foto do Ramon"
                />
            </div>
        </div>
    );
}
