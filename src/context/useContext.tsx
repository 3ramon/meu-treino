import React, { createContext, useState, ReactNode } from 'react';

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

export const UserContext = createContext<UserContextType>({} as UserContextType);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);

  function salvarUsuario(nome: string, email: string) {
    setUser({ nome, email });
  }

  function logout() {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, salvarUsuario, logout }}>
      {children}
    </UserContext.Provider>
  );
}