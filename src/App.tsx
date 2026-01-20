import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Todohome from "./pages/Todohome";
import FormUser from "./pages/FormUser";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import { ProtectedRoutes } from "./pages/ProtectedRoutes";
import { UserProvider } from "./context/userContext";
import Loja from "./pages/Loja";

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route
                        path="/Profile"
                        element={
                            // <ProtectedRoutes>
                                <Profile />
                            // </ProtectedRoutes>
                        }
                    />

                    <Route path="/ToDo" element={<Todohome />} />
                    <Route path="/Loja" element={<Loja />} />
                    <Route path="/FormUser" element={<FormUser />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
