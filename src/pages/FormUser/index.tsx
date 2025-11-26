import React from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import "./style.css";
import { TodoForm } from "../../components/TodoForm/index";
import { TodoList } from "../../components/TodoList/index";
import UserInterface from "../../UserInterface";

type StatusDoPedido = "aguardando" | "em_preparo" | "enviado" | "entregue";

export default function FormUser() {
    const [inputNameValue, setInputNameValue] = useState<string>("");
    const [inputEmailValue, setInputEmailValue] = useState<string>("");
    const [inputIdadeValue, setInputIdadeValue] = useState<number>(0);
    const [planoAtivoBox, setPlanoAtivoBox] = useState<boolean>(false);
    const [statusPedido, setStatusPedido] =
        useState<StatusDoPedido>("aguardando");
    const [status, setStatus] = useState<string>("");

    const [sendForm, setSendForm] = useState<boolean>(false);

    const usuario: UserInterface = {
        id: 1,
        nome: inputNameValue,
        email: inputEmailValue,
        idade: inputIdadeValue,
        planoAtivo: planoAtivoBox,
    };

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const evento = event.target;
        switch (evento.placeholder) {
            case "Nome":
                setInputNameValue(evento.value);
                break;
            case "E-mail":
                setInputEmailValue(evento.value);
                break;
            case "Idade":
                setInputIdadeValue(Number(evento.value));
                break;
            case "Sta":
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

    function handleSubmit() {
        if (inputNameValue && inputEmailValue && inputIdadeValue) {
            setSendForm(true);
            exibirStatus(statusPedido);
        } else {
            setSendForm(false);
            alert("Favor preencher todas as informações");
        }
    }

    return (
        <div className="Form">
            <button className="RouterButton" onClick={handleClick}>Ir para To Do</button>
            <h1>Formulario do Usuario</h1>
            <input
                type="text"
                placeholder="Nome"
                value={inputNameValue}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="E-mail"
                value={inputEmailValue}
                onChange={handleChange}
            />
            <input
                type="number"
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

            {sendForm && (
                <div className="Resume">
                    <div>Nome: {usuario.nome}</div>
                    <div>Email: {inputEmailValue}</div>
                    <div>Idade: {inputIdadeValue}</div>
                    <div>
                        {planoAtivoBox
                            ? "Seu plano está ativo :D"
                            : "Você está com o plano desativado!"}
                    </div>
                    <div>{status}</div>
                </div>
            )}
        </div>
    );
}
