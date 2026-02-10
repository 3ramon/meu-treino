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
        <>
            {produtos.map((produto) => (
                <div key={produto.id} className="card__produto">
                    <div className="card__topo">
                        <h3 className="card__nome">{produto.nome}</h3>
                        <span className="card__categoria">{produto.categoria}</span>
                    </div>
                    <p className="card__preco">R$ {produto.preco}</p>

                    <div className="card__acoes">
                        <button
                            className={`btn__like ${produto.favorito ? "isLiked" : ""}`}
                            onClick={() => produto.id !== undefined && favorited(produto.id)}
                        >
                            {produto.favorito ? "♥" : "♡"}
                        </button>

                        <button
                            className="btn__primary"
                            onClick={() => adicionarCarrinho(produto)}
                        >
                            Adicionar ao carrinho
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}
