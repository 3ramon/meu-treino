import { useNavigate } from "react-router-dom";
import "./style.css";
import { useState, useContext} from "react";
import perfilImg from "../../assets/perfil.png";
import { ButtonNavBar } from "../ButtonNavbar";
import { LojaContext } from "../../context/lojaContext";

interface NavbarProps {
    isShop: boolean;
}

export default function NavBar({ isShop }: NavbarProps) {
    const [showCart, setShowCart] = useState(false);
    const {
        carrinho,
        removerItemCarrinho,
        decrementarItemCarrinho,
        acrescentarItemCarrinho,
    } = useContext(LojaContext);

    // receber essas 2 variaveis direto do context para verificar se esta logado
    const isLoggedIn = true;
    const username = "Ramon";

    const navigate = useNavigate();

    const handleClick = (route: any) => {
        navigate(`/${route}`);
    };

    return (
        <nav className="navbar">
            <div className="navbar__left">
                <div className="user__section">
                    {isLoggedIn ? (
                        <div
                            className="user__perfil"
                            onClick={() => {
                                handleClick("Profile");
                            }}
                        >
                            <img
                                src={perfilImg}
                                alt="user-icon"
                                className="user__icon"
                            />
                            <span className="username">{username}</span>
                        </div>
                    ) : (
                        <button className="login__btn">Login</button>
                    )}
                </div>
            </div>

            <div className="navbar__center">
                <div className="nav__text">Meus projetos:</div>

                <ButtonNavBar name="Home" onClick={() => handleClick("")} />
                <ButtonNavBar
                    name="To Do"
                    onClick={() => handleClick("ToDo")}
                />
                <ButtonNavBar
                    name="Formulário"
                    onClick={() => handleClick("FormUser")}
                />
                <ButtonNavBar name="Loja" onClick={() => handleClick("Loja")} />
            </div>

            <div className="navbar__right">
                {isShop && (
                    <>
                        <button
                            className="cart__btn"
                            onClick={() => setShowCart((prev: any) => !prev)}
                        >
                            🛒
                        </button>
                        {showCart && (
                            <div className="cart__modal">
                                <h4>Itens do Carrinho</h4>
                                {carrinho.length === 0! ? (
                                    <div>Carrinho Vazio!</div>
                                ) : (
                                    carrinho.map((produto) => (
                                        <div>
                                            <div>Nome: {produto.nome}</div>
                                            <div>Valor: R$ {produto.preco}</div>
                                            <div>
                                                <div>
                                                    Quantidade:{" "}
                                                    {produto.quantidade}
                                                </div>
                                                <button
                                                    onClick={() => {
                                                        removerItemCarrinho(
                                                            produto.id,
                                                        );
                                                    }}
                                                >
                                                    Remover
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        acrescentarItemCarrinho(
                                                            produto.id,
                                                        );
                                                    }}
                                                >
                                                    +
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        decrementarItemCarrinho(
                                                            produto.id,
                                                        );
                                                    }}
                                                >
                                                    -
                                                </button>
                                            </div>
                                            <p />
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>
        </nav>
    );
}
