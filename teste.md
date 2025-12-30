🥋 Desafio Técnico: Lista de Suplementos

Objetivo: Criar uma página de listagem de produtos com interação de "Favoritar" e filtro simples.

Setup (Dados Iniciais)

Copie este array para usar como "Mock" (simulação de API) no seu componente:

const MOCK_PRODUCTS = [
  { id: 1, nome: "Whey Protein", preco: 150, categoria: "Proteína", favorito: false },
  { id: 2, nome: "Creatina Monohidratada", preco: 80, categoria: "Força", favorito: true },
  { id: 3, nome: "Pré-Treino Psicótico", preco: 120, categoria: "Energia", favorito: false },
  { id: 4, nome: "Barra de Proteína", preco: 15, categoria: "Proteína", favorito: false },
  { id: 5, nome: "Multivitamínico", preco: 60, categoria: "Saúde", favorito: false },
];
Requisitos (Passo a Passo)

Passo 1: Renderização Básica

Crie uma nova página src/pages/Loja/index.tsx.

Defina uma interface Product para tipar os dados acima.

Renderize a lista no ecrã mostrando Nome, Preço e se é Favorito ou não.

Passo 2: Componentização

O código do card do produto não deve ficar solto na página.

Crie um componente ProductCard que receba os dados via props.

Passo 3: Lógica de Estado (O Teste Real)

Ao clicar num botão "Like" no card, o estado deve atualizar.

Regra de Ouro: Deve respeitar a imutabilidade do React (não usar .push ou alterar direto).

O botão deve mudar de cor/texto dependendo se é favorito ou não.
Passo 4: O "Algo a Mais" (Custom Hook ou Filtro)

Escolha um:

Opção A (Filtro): Crie botões (Proteína, Força, Energia) que, ao clicar, mostram apenas aquela categoria.

Opção B (Hook): Extraia a lógica de favoritar para um hook useProducts.