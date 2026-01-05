import "./style.css";
import LojaInterface from "../../LojaInterface";
import { CardShop } from "../../components/CardShop";
import { useEffect, useState } from "react";

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
                : produto
        );
        setProdutos(newProdutos);
    }

    return (
        <div className="container">
            <div>Loja</div>

            <div>
                <button
                    onClick={() => {
                        setCategoriaAtiva("Proteína");
                    }}
                >
                    Proteína
                </button>
                <button
                    onClick={() => {
                        setCategoriaAtiva("Força");
                    }}
                >
                    Força
                </button>
                <button
                    onClick={() => {
                        setCategoriaAtiva("Energia");
                    }}
                >
                    Energia
                </button>
                <button
                    onClick={() => {
                        setCategoriaAtiva(null);
                    }}
                >
                    Limpar filtros
                </button>
            </div>

            <CardShop produtos={produtosFiltrados} favorited={handleFavorited} />
        </div>
    );
}
