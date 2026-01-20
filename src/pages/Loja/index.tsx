import "./style.css";
import LojaInterface from "../../LojaInterface";
import { CardShop } from "../../components/CardShop";
import { useContext, useEffect, useState } from "react";
import { LojaContext } from "../../context/lojaContext";
import NavBar from "../../components/NavBar";

export default function Loja() {
    const [produtos, setProdutos] = useState<LojaInterface[]>([
        {
            id: 1,
            nome: "Whey Protein",
            preco: 150,
            categoria: "Proteína",
            favorito: false,
        },
        {
            id: 2,
            nome: "Creatina Monohidratada",
            preco: 80,
            categoria: "Força",
            favorito: true,
        },
        {
            id: 3,
            nome: "Pré-Treino Psicótico",
            preco: 120,
            categoria: "Energia",
            favorito: false,
        },
        {
            id: 4,
            nome: "Barra de Proteína",
            preco: 15,
            categoria: "Proteína",
            favorito: false,
        },
        {
            id: 5,
            nome: "Multivitamínico",
            preco: 60,
            categoria: "Saúde",
            favorito: false,
        },
    ]);

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

    const { salvarItemCarrinho } = useContext(LojaContext);

    function adicionarAoCarrinho(item: LojaInterface) {
        salvarItemCarrinho(
            item.id,
            item.nome,
            item.preco,
            item.categoria,
            item.favorito,
        );
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
