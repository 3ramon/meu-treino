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
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    function salvarUsuario(nome: string, email: string) {
        const newUser = { nome, email };
        setUser(newUser);
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
