import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Todohome from "./pages/Todohome";
import FormUser from "./pages/FormUser";
import Home from "./pages/Home";
import Loja from "./pages/Loja";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import { ProtectedRoutes } from "./pages/ProtectedRoutes";
import { UserProvider } from "./context/userContext";
import { LojaProvider } from "./context/lojaContext";

function App() {
    return (
        <UserProvider>
            <LojaProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route
                            path="/Profile"
                            element={
                                <ProtectedRoutes>
                                    <Profile />
                                </ProtectedRoutes>
                            }
                        />

                        <Route path="/ToDo" element={<Todohome />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Loja" element={<Loja />} />
                        <Route path="/FormUser" element={<FormUser />} />
                    </Routes>
                </BrowserRouter>
            </LojaProvider>
        </UserProvider>
    );
}

export default App;
