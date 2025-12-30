import "./style.css";
import LojaInterface from "../../LojaInterface";
import { CardShop } from "../../components/CardShop";
import { useState } from "react";

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

    const [produtosFilter, setProdutosFilter] =
        useState<LojaInterface[]>(produtos);

    function handleFavorited(idFavorited: number) {
        const newProdutos = produtos.map((produto: any) =>
            idFavorited === produto.id
                ? { ...produto, favorito: !produto.favorito }
                : produto
        );
        setProdutos(newProdutos);
    }

    function filterProducts(categoria: string) {
        const newProducts = produtos.filter(
            (produto: any) => produto.categoria === categoria
        );
        setProdutosFilter(newProducts);
    }

    return (
        <div className="container">
            <div>Loja</div>

            <div>
                <button
                    onClick={() => {
                        filterProducts("Proteína");
                    }}
                >
                    Proteína
                </button>
                <button
                    onClick={() => {
                        filterProducts("Força");
                    }}
                >
                    Força
                </button>
                <button
                    onClick={() => {
                        filterProducts("Energia");
                    }}
                >
                    Energia
                </button>
                <button onClick={() => setProdutosFilter(produtos)}>
                    Limpar filtros
                </button>
            </div>

            <CardShop produtos={produtosFilter} favorited={handleFavorited} />
        </div>
    );
}
