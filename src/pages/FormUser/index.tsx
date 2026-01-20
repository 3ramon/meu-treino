import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import UserInterface from "../../UserInterface";
import { UserContext } from "../../context/userContext";
import { useForm } from "../../hooks/useForm";
import NavBar from "../../components/NavBar";
type StatusDoPedido = "aguardando" | "em_preparo" | "enviado" | "entregue";

export default function FormUser() {
    const navigate = useNavigate();
    const { salvarUsuario } = useContext(UserContext);

    const [planoAtivoBox, setPlanoAtivoBox] = useState<boolean>(false);

    const [status, setStatus] = useState<string>("");

    const { form, handleChange } = useForm<UserInterface>({
        // id = 1,
        name: "",
        email: "",
        age: 0,
        planoAtivo: false,
    });

    const [statusPedido, setStatusPedido] =
        useState<StatusDoPedido>("aguardando");

    const handleClick = (route: any) => {
        navigate(`${route}`);
    };

    function exibirStatus(status: StatusDoPedido) {
        switch (status) {
            case "aguardando":
                setStatus("O pedido está aguardando confirmação.");
                break;
            case "em_preparo":
                setStatus("Seu pedido está sendo preparado.");
                break;
            case "enviado":
                setStatus("O pedido já foi enviado!");
                break;
            case "entregue":
                setStatus("O pedido foi entregue com sucesso!");
                break;
        }
    }

    function handleSubmit() {
        if (!form.name || !form.email) {
            alert("Preencha nome e email");
            return;
        }

        exibirStatus(statusPedido);
        salvarUsuario(form.name, form.email, form.age, form.planoAtivo);
        navigate("/Profile");
        // } else {
        //     setSendForm(false);
        //     alert("Favor preencher todas as informações");
        // }
    }

    return (
        <>
            <NavBar isShop={false} />
            <div className="Form">
                <h1>Formulario do Usuario</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={form.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Idade"
                    value={form.age}
                    onChange={handleChange}
                />
                <div>
                    <label htmlFor="">Plano ativo?</label>
                    <input
                        type="checkbox"
                        checked={form.planoAtivo}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="">Status do seu pedido</label>

                    <select
                        value={statusPedido}
                        onChange={(e) =>
                            setStatusPedido(e.target.value as StatusDoPedido)
                        }
                    >
                        <option value="aguardando">Aguardando</option>
                        <option value="em_preparo">Em preparo</option>
                        <option value="enviado">Enviado</option>
                        <option value="entregue">Entregue</option>
                    </select>
                </div>
                <button onClick={() => handleSubmit()}>Enviar fomulario</button>
            </div>
        </>
    );
}
