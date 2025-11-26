// import { useState } from "react";

// const [todos, setTodos] = useState<[]>([]);
const jogadas = [
    {
        playerId: 1,
        scoutType: "gol",
    },

    {
        playerId: 2,
        scoutType: "assistencia",
    },

    {
        playerId: 1,
        scoutType: "gol",
    },

    {
        playerId: 2,
        scoutType: "gol",
    },
    {
        playerId: 3,
        scoutType: "assistencia",
    },
    {
        playerId: 3,
        scoutType: "assistencia",
    },
     {
        playerId: 1,
        scoutType: "assistencia",
    },
    {
        playerId: 4,
        scoutType: "falta",
    },
     {
        playerId: 4,
        scoutType: "falta",
    },
    {
        playerId: 5,
        scoutType: "cartao",
    },
     {
        playerId: 2,
        scoutType: "correu",
    },
    {
        playerId: 32,
        scoutType: "falta",
    },
];

const todos = {};

jogadas.map(({ playerId, scoutType }) => {
    if (playerId in todos) {
        var teste = todos[playerId];

        if (scoutType in teste) {
            teste[scoutType] = teste[scoutType] + 1;
        } else {
            teste[scoutType] = 1;
        }
    } else {
        todos[playerId] = JSON.parse(`{ "${scoutType}" : ${1} }`);
    }
});
console.log(todos);
