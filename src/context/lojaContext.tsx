import React, { createContext, useState, ReactNode, useEffect } from "react";
import LojaI from "../LojaInterface";
import { supabase } from "../services/supabase";

interface LojaContextType {
    item: LojaI | null;
    produtosBanco: LojaI[];
    carrinho: LojaI[];
    salvarProduto: (produto: LojaI) => void;
    salvarItemCarrinho: (item: LojaI) => void;
    removerItemCarrinho: (id: number) => void;
    acrescentarItemCarrinho: (id: number) => void;
    decrementarItemCarrinho: (id: number) => void;
}

export const LojaContext = createContext<LojaContextType>(
    {} as LojaContextType,
);

export function LojaProvider({ children }: { children: ReactNode }) {
    const [produtosBanco, setProdutosBanco] = useState<LojaI[]>([]);
    const [carrinho, setCarrinho] = useState<LojaI[]>([]);
    const [item, setItem] = useState<LojaI | null>(null);

    useEffect(() => {
        loadProdutos();
    }, []);

    async function loadProdutos() {
        const { data, error } = await supabase.from("produtos").select("*");
        console.log(error, data, "retorno do supabase");
        setProdutosBanco(data || []);
    }

    async function salvarProduto(produto: LojaI) {
        const { error } = await supabase.from("produtos").insert([
            {
                nome: produto.nome,
                preco: produto.preco,
                categoria: produto.categoria,
                favorito: produto.favorito,
                quantidade: produto.quantidade,
            },
        ]);
        await loadProdutos();
    }

    function salvarItemCarrinho(item: LojaI) {
        const itemExiste = carrinho.find((i) => i.id === item.id);

        if (itemExiste && item.id !== undefined) {
            setCarrinho(mapCarrinho(item.id));
        } else {
            const novoItem = { ...item, quantidade: 1 };
            setCarrinho([...carrinho, novoItem]);
        }
    }

    function mapCarrinho(id: number): LojaI[] {
        return carrinho.map((produto) => {
            if (produto.id === id) {
                return { ...produto, quantidade: produto.quantidade + 1 };
            }
            return produto;
        });
    }

    function acrescentarItemCarrinho(id: number) {
        setCarrinho(mapCarrinho(id));
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
                produtosBanco,
                carrinho,
                salvarProduto,
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
