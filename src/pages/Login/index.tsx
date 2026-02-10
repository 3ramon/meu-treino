import "./style.css";

import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import NavBar from "../../components/NavBar";
import { useForm } from "../../hooks/useForm";
import UserInterface from "../../UserInterface";
import { useNavigation } from "../../hooks/useNavigation";

export default function Login() {
    const { login } = useContext(UserContext);

    const { handleNavigation } = useNavigation();
    const { form, handleChange } = useForm<UserInterface>({
        // id = 1,
        name: "",
        email: "",
        age: 0,
        planoAtivo: false,
        password: "",
    });

    function handleSubmit() {
        if (!form.password || !form.email) {
            alert("Preencha email e senha");
            return;
        }

        if (login(form.email, form.password)) {
            console.log("deu certo")
            handleNavigation("Profile");
        } else {
            alert("Email ou Senha incorreto!");
        }

        // storedUser.
    }

    return (
        <>
            <NavBar isShop={false} />
            <div className="container_login">
                <h2>Login</h2>
                
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="input"
                />

                <label htmlFor="senha">Senha</label>
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="input"
                />

                <button
                    type="submit"
                    className="button_entrar"
                    onClick={() => handleSubmit()}
                >
                    Entrar
                </button>
            </div>
        </>
    );
}
