import React, { createContext, useState, ReactNode, useEffect } from "react";
import Item from "../LojaInterface";

interface LojaContextType {
    item: Item | null;
    salvarItemCarrinho: (id: number, nome: string, preco: number, categoria: string, favorito: boolean) => void;
    removerItemCarrinho: (id: number) => void;
}

export const LojaContext = createContext<LojaContextType>(
    {} as LojaContextType
);

export function UserProvider({ children }: { children: ReactNode }) {
    const [carrinho, setCarrinho] = useState<[{}]>([{}]);
    const [item, setItem] = useState<Item | null>(null);

    useEffect(() => {
       
        // const storedUser = localStorage.getItem("user");
        // if (storedUser && storedUser !== "undefined") {
        //     //salvando o usuario(caso exista) utilizando o .parse para formatar como obj
        //    try{
        //         const parsedUser = JSON.parse(storedUser);
        //         setUser(parsedUser);
        //    }catch(error){
        //         console.error("Erro ao carregar usuário do cache:", error);
        //         localStorage.removeItem("user");
        //    }
        // }else{
        //     if(storedUser !== "undefined"){
        //         localStorage.removeItem("user");
        //     }
        // }
    }, []);

    function salvarItemCarrinho(id: number, nome: string, preco: number, categoria: string, favorito: boolean) {
        const novoItemCarrinho = { id, nome, preco, categoria, favorito };
        setCarrinho([...carrinho, novoItemCarrinho]);
        //usando o .stringify para converter o obj em string json que é aceito no localstorage
        // localStorage.setItem("user", JSON.stringify(newUser));
    }

    function removerItemCarrinho(id: number) {
        // busca o id no carrinho e remove
        // localStorage.removeItem("user");
    }

    return (
        <LojaContext.Provider value={{ item, salvarItemCarrinho, removerItemCarrinho }}>
            {children}
        </LojaContext.Provider>
    );
}
