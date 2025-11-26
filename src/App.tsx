import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Todohome from "./pages/Todohome";
import FormUser from "./pages/FormUser";
import { UserProvider } from "./context/useContext";

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Todohome />} />
                    <Route path="/FormUser" element={<FormUser />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
