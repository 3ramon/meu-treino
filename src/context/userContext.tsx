import React, { createContext, useState, ReactNode, useEffect } from "react";

// O formato dos dados que queremos salvar
interface UserData {
    nome: string;
    email: string;
}

// O que o contexto vai oferecer para quem usar ele
interface UserContextType {
    user: UserData | null;
    salvarUsuario: (nome: string, email: string) => void;
    logout: () => void;
}

export const UserContext = createContext<UserContextType>(
    {} as UserContextType
);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<UserData | null>(null);

    useEffect(() => {
       
        const storedUser = localStorage.getItem("user");
        if (storedUser && storedUser !== "undefined") {
            //salvando o usuario(caso exista) utilizando o .parse para formatar como obj
           try{
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
           }catch(error){
                console.error("Erro ao carregar usuário do cache:", error);
                localStorage.removeItem("user");
           }
        }else{
            if(storedUser !== "undefined"){
                localStorage.removeItem("user");
            }
        }
    }, []);

    function salvarUsuario(nome: string, email: string) {
        const newUser = { nome, email };
        setUser(newUser);
        //usando o .stringify para converter o obj em string json que é aceito no localstorage
        localStorage.setItem("user", JSON.stringify(newUser));
    }

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <UserContext.Provider value={{ user, salvarUsuario, logout }}>
            {children}
        </UserContext.Provider>
    );
}
