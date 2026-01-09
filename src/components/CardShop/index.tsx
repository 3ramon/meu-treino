import "./style.css";
import LojaInterface from "../../LojaInterface";

interface ShopProps {
    produtos: LojaInterface[];
    favorited: (index: number) => void;
    adicionarCarrinho: (index: LojaInterface) => void;
}

export function CardShop({
    produtos,
    favorited,
    adicionarCarrinho,
}: ShopProps) {
    return (
        <div className="cardContainer">
            {produtos.map((produto) => (
                <div key={produto.id} className="container">
                    <div>Nome: {produto.nome}</div>
                    <div>Preco: {produto.preco}</div>
                    <button
                        style={{
                            backgroundColor: produto.favorito
                                ? "Grey"
                                : "Yellow",
                        }}
                        onClick={() => favorited(produto.id)}
                    >
                        {!produto.favorito ? "Like" : "Deslike"}
                    </button>
                    <button onClick={() => adicionarCarrinho(produto)}></button>
                </div>
            ))}
        </div>
    );
}
