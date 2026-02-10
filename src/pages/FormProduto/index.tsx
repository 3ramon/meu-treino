import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "./style.css";
import { useForm } from "../../hooks/useForm";
import { useNavigation } from "../../hooks/useNavigation";
import NavBar from "../../components/NavBar";
import LojaI from "../../LojaInterface";
import { LojaContext } from "../../context/lojaContext";

export default function FormProduto() {
    const { handleNavigation } = useNavigation();

    const { salvarProduto } = useContext(LojaContext);
    const { form, handleChange } = useForm<LojaI>({
        nome: "",
        preco: 0,
        categoria: "",
        favorito: false,
        quantidade: 1,
    });



    function handleSubmit() {
        if (!form.nome || !form.preco || !form.categoria) {
            alert("Preencha nome, preço e categoria");
            return;
        }
        if (form.quantidade <= 0) {
            alert("Quantidade precisa ser Maior que 0");
            return;
        }

        salvarProduto(form);
        handleNavigation("Loja");
    }

    return (
        <>
            <NavBar isShop={false} />
            <div className="Form">
                <h1>Cadastro de Produtos</h1>
                <input
                    className="input"
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={form.nome}
                    onChange={handleChange}
                />
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    Preço:
                    <input
                        className="input"
                        type="number"
                        name="preco"
                        value={form.preco}
                        onChange={handleChange}
                    />
                </div>
                <input
                    className="input"
                    type="text"
                    name="categoria"
                    placeholder="Categoria"
                    value={form.categoria}
                    onChange={handleChange}
                />
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    Quantidade:
                    <input
                        className="input"
                        type="number"
                        name="quantidade"
                        value={form.quantidade}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={() => handleSubmit()}>
                    Cadastrar Produto
                </button>
            </div>
        </>
    );
}
