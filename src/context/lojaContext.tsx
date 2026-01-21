import React, { createContext, useState, ReactNode, useEffect } from "react";
import LojaI from "../LojaInterface";

interface LojaContextType {
    item: LojaI | null;
    carrinho: LojaI[];
    salvarItemCarrinho: (item: LojaI) => void;
    removerItemCarrinho: (id: number) => void;
    acrescentarItemCarrinho: (id: number) => void;
    decrementarItemCarrinho: (id: number) => void;
}

export const LojaContext = createContext<LojaContextType>(
    {} as LojaContextType,
);

export function LojaProvider({ children }: { children: ReactNode }) {
    const [carrinho, setCarrinho] = useState<LojaI[]>([]);
    const [item, setItem] = useState<LojaI | null>(null);

    useEffect(() => {}, []);

    function salvarItemCarrinho(item: LojaI) {
        const itemExiste = carrinho.find((i) => i.id === item.id);

        if (itemExiste) {
            const novoCarrinho = carrinho.map((produto) => {
                if (produto.id === item.id) {
                    return { ...produto, quantidade: produto.quantidade + 1 };
                }
                return produto;
            });

            setCarrinho(novoCarrinho);
        } else {
            const novoItem = { ...item, quantidade: 1 };
            setCarrinho([...carrinho, novoItem]);
        }
    }

    function acrescentarItemCarrinho(id: number) {
        const novoCarrinho = carrinho.map((produto) => {
            if (produto.id === id) {
                return { ...produto, quantidade: produto.quantidade + 1 };
            }
            return produto;
        });

        setCarrinho(novoCarrinho);
    }

    function decrementarItemCarrinho(id: number) {
        const itemDecrementar = carrinho.find((i) => i.id === id);
        if (itemDecrementar && itemDecrementar.quantidade > 1) {
            const novoCarrinho = carrinho.map((produto) => {
                if (produto.id === id) {
                    return { ...produto, quantidade: produto.quantidade - 1 };
                }
                return produto;
            });
            setCarrinho(novoCarrinho);
        } else {
            const novoCarrinho = carrinho.filter(
                (produto) => produto.id !== id,
            );
            setCarrinho(novoCarrinho);
        }
    }

    function removerItemCarrinho(id: number) {
        const novoCarrinho = carrinho.filter((produto) => produto.id !== id);
        setCarrinho(novoCarrinho);
    }

    return (
        <LojaContext.Provider
            value={{
                item,
                carrinho,
                acrescentarItemCarrinho,
                decrementarItemCarrinho,
                salvarItemCarrinho,
                removerItemCarrinho,
            }}
        >
            {children}
        </LojaContext.Provider>
    );
}
