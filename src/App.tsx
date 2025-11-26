import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Todohome from "./pages/Todohome";
import FormUser from "./pages/FormUser";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Todohome />} />
                <Route path="/FormUser" element={<FormUser />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
