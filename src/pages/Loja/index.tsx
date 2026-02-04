import "./style.css";
import LojaInterface from "../../LojaInterface";
import { CardShop } from "../../components/CardShop";
import { useContext, useEffect, useState } from "react";
import { LojaContext } from "../../context/lojaContext";
import NavBar from "../../components/NavBar";

export default function Loja() {
    const { salvarItemCarrinho, produtosBanco } = useContext(LojaContext);

    const [produtos, setProdutos] = useState<LojaInterface[]>(produtosBanco);

    const [categoriaAtiva, setCategoriaAtiva] = useState<string | null>(null);
    // eu havia pensado nisso antes, mas esqueci do null entao fiquei bugado com o "" que nao filtrava nada

    // exibe os dados que forem filtrados ou exibe o proprio state de produtos
    const produtosFiltrados = categoriaAtiva
        ? produtos.filter((produto) => produto.categoria === categoriaAtiva)
        : produtos;

    function handleFavorited(idFavorited: number) {
        const newProdutos = produtos.map((produto: any) =>
            idFavorited === produto.id
                ? { ...produto, favorito: !produto.favorito }
                : produto,
        );
        setProdutos(newProdutos);
    }

    useEffect(() => {
        console.log ("chamou o useEffect")
        setProdutos(produtosBanco);
    }, [produtosBanco]);

    function adicionarAoCarrinho(item: LojaInterface) {
        salvarItemCarrinho(item);
    }

    return (
        <>
            <NavBar isShop={true} />

            <div>
                <div className="loja__page">
                    <header className="loja__header">
                        <h2 className="loja__titulo">Loja</h2>

                        <div className="filtros">
                            <button
                                className="chip active"
                                onClick={() => {
                                    setCategoriaAtiva("Proteína");
                                }}
                            >
                                Proteína
                            </button>

                            <button
                                className="chip"
                                onClick={() => {
                                    setCategoriaAtiva("Força");
                                }}
                            >
                                Força
                            </button>
                            <button
                                className="chip"
                                onClick={() => {
                                    setCategoriaAtiva("Energia");
                                }}
                            >
                                Energia
                            </button>
                            <button
                                className="btn__ghost"
                                onClick={() => {
                                    setCategoriaAtiva(null);
                                }}
                            >
                                Limpar filtros
                            </button>
                        </div>
                    </header>

                    <section className="produtos__grid">
                        <CardShop
                            produtos={produtosFiltrados}
                            favorited={handleFavorited}
                            adicionarCarrinho={adicionarAoCarrinho}
                        />
                    </section>
                </div>
            </div>
        </>
    );
}
