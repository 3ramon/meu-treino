import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import "./style.css";
import { TodoForm } from "../../components/TodoForm/index";
import { TodoList } from "../../components/TodoList/index";
import UserInterface from "../../UserInterface";
import { UserContext } from "../../context/userContext";
import Layout from "../../components/Layout";

type StatusDoPedido = "aguardando" | "em_preparo" | "enviado" | "entregue";

export default function FormUser() {
    const [inputNameValue, setInputNameValue] = useState<string>("");
    const [inputEmailValue, setInputEmailValue] = useState<string>("");
    const [inputIdadeValue, setInputIdadeValue] = useState<number>(0);
    const [planoAtivoBox, setPlanoAtivoBox] = useState<boolean>(false);
    const [statusPedido, setStatusPedido] =
        useState<StatusDoPedido>("aguardando");
    const [status, setStatus] = useState<string>("");

    const usuario: UserInterface = {
        id: 1,
        nome: inputNameValue,
        email: inputEmailValue,
        idade: inputIdadeValue,
        planoAtivo: planoAtivoBox,
    };

    const navigate = useNavigate();

    const handleClick = (route: any) => {
        navigate(`${route}`);
    };

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const evento = event.target;
        switch (evento.name) {
            case "name":
                setInputNameValue(evento.value);
                break;
            case "email":
                setInputEmailValue(evento.value);
                break;
            case "age":
                setInputIdadeValue(Number(evento.value));
                break;
        }
    }

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

    const { salvarUsuario } = useContext(UserContext);

    function handleSubmit() {
        // if (inputNameValue && inputEmailValue && inputIdadeValue) {
        exibirStatus(statusPedido);
        salvarUsuario(inputNameValue, inputEmailValue);
        navigate("/Profile");
        // } else {
        //     setSendForm(false);
        //     alert("Favor preencher todas as informações");
        // }
    }

    return (
        <div className="Form">
            <button className="RouterButton" onClick={() => handleClick("/")}>
                Voltar para
            </button>
            <h1>Formulario do Usuario</h1>
            <input
                type="text"
                name="name"
                placeholder="Nome"
                value={inputNameValue}
                onChange={handleChange}
            />
            <input
                type="text"
                name="email"
                placeholder="E-mail"
                value={inputEmailValue}
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                placeholder="Idade"
                value={inputIdadeValue}
                onChange={handleChange}
            />
            <div>
                <label htmlFor="">Plano ativo?</label>
                <input
                    type="checkbox"
                    checked={planoAtivoBox}
                    onChange={() => setPlanoAtivoBox(!planoAtivoBox)}
                />{" "}
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
    );
}
