import "./style.css";
import { useState, useContext, use, useEffect } from "react";
import perfilImg from "../../assets/perfil.png";
import { ButtonNavBar } from "../ButtonNavbar";
import { LojaContext } from "../../context/lojaContext";
import { UserContext } from "../../context/userContext";
import { useNavigation } from "../../hooks/useNavigation";

interface NavbarProps {
    isShop: boolean;
}

export default function NavBar({ isShop }: NavbarProps) {
    const { logged, user } = useContext(UserContext);

    const { handleNavigation } = useNavigation();
    const [showCart, setShowCart] = useState(false);
    const {
        carrinho,
        removerItemCarrinho,
        decrementarItemCarrinho,
        acrescentarItemCarrinho,
    } = useContext(LojaContext);

    return (
        <nav className="navbar">
            <div className="navbar__left">
                <div className="user__section">
                    {logged ? (
                        <div
                            className="user__perfil"
                            onClick={() => handleNavigation("Profile")}
                        >
                            <img
                                src={perfilImg}
                                alt="user-icon"
                                className="user__icon"
                            />
                            <span className="username">{user?.name}</span>
                        </div>
                    ) : (
                        <button
                            name="Home"
                            className="login__btn"
                            onClick={() => handleNavigation("Login")}
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>

            <div className="navbar__center">
                <div className="nav__text">Meus projetos:</div>

                <ButtonNavBar
                    name="Home"
                    onClick={() => handleNavigation("")}
                    disabledButton={false}
                />
                <ButtonNavBar
                    name="To Do"
                    onClick={() => handleNavigation("ToDo")}
                    disabledButton={false}
                />
                <ButtonNavBar
                    name="Formulário"
                    disabledButton={logged}
                    onClick={() => handleNavigation("FormUser")}
                />

                <ButtonNavBar
                    name="Loja"
                    onClick={() => handleNavigation("Loja")}
                    disabledButton={false}
                />
                <ButtonNavBar
                    name="Cadastro"
                    onClick={() => handleNavigation("FormProduto")}
                    disabledButton={false}
                />
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
                                                        produto.id !==
                                                            undefined &&
                                                            removerItemCarrinho(
                                                                produto.id,
                                                            );
                                                    }}
                                                >
                                                    Remover
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        produto.id !==
                                                            undefined &&
                                                            acrescentarItemCarrinho(
                                                                produto.id,
                                                            );
                                                    }}
                                                >
                                                    +
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        produto.id !==
                                                            undefined &&
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
