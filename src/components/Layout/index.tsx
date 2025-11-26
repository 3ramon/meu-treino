import { useContext } from "react";
import { UserContext } from "../../context/useContext";

export default function Layout() {
    const { user, logout } = useContext(UserContext);

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <nav className="bg-slate-800 text-white p-4 shadow-lg">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <div className="font-bold text-xl tracking-wider">
                        Meu App
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="text-sm">
                            {user ? (
                                <span className="text-green-400 font-semibold flex items-center gap-2">
                                    {/* <LucideUser size={16} /> */}
                                    Olá, {user.nome}!
                                    <button
                                        onClick={logout}
                                        className="ml-2 text-xs text-slate-400 hover:text-white underline"
                                    >
                                        (Sair)
                                    </button>
                                </span>
                            ) : (
                                <span className="text-slate-400">
                                    Visitante
                                </span>
                            )}
                        </div>

                        <div className="flex gap-4 text-sm font-medium">
                            {/* <Link to="/" className="hover:text-cyan-400 flex items-center gap-1">
                <LucideHome size={16} /> Home
              </Link>
              <Link to="/form-user" className="hover:text-cyan-400 flex items-center gap-1">
                <LucideUserPlus size={16} /> Cadastro
              </Link> */}
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-2xl mx-auto mt-8 p-4">
                {/* <Outlet /> */}
            </main>
        </div>
    );
}
