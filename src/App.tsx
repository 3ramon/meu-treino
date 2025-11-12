import React from "react";
import { CardLol } from "./components/Card";
import { Button } from "./components/Button";
import { LikeButton } from "./components/LikeButton";

import primeiro from "./assets/primeiro.svg";
import segundo from "./assets/segundo.svg";

import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [champions, setChampions] = useState([]);
    const [visible, setVisible] = useState(false);
    const [championHP, setChampionHP] = useState([]);
    const [hpText, setHpText] = useState(0);

    useEffect(() => {
        fetch(
            "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json"
        )
            .then((response) => response.json())
            .then((data) => {
                setChampions(Object.values(data.data));
            })
            .catch((error) => {
                console.log("Erro:", error);
            });
    }, []);

    const getImageUrl = (championName: string) => {
        return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${championName}`;
    };

    function getTopHp(campeoes: any) {
        setVisible(true);
        const campeoesHP = campeoes.filter(
            (campeao: any) => campeao.stats.hp == hpText
        );
        setChampionHP(campeoesHP);
    }

    function handleChange(event: any) {
        const novoTexto = event.target.value;
        setHpText(novoTexto);
    }

    return (
        <div className="App">
            {/* <div>
                <p>Advinhe o Hp de algum campeão!</p>
                <input type="number" value={hpText} onChange={handleChange} />
            </div>
            <Button name={"Buscar"} onClick={() => getTopHp(champions)} />
            <Button
                name={"Limpar"}
                onClick={() => {
                    setChampionHP([]);
                    setHpText(0);
                }}
            /> */}
            <label>Ola</label>

            <LikeButton
                name={"Likes"}
                contagemInicial={10}
                // onClick={() => {}}
            />

            {/* {visible &&
                (championHP.length > 0 ? (
                    <div className="cardsContainers">
                        {championHP.map((champion: any) => (
                            <CardLol
                                imageFull={getImageUrl(champion.image.full)}
                                name={champion.name}
                                title={champion.title}
                            />
                        ))}
                    </div>
                ) : (
                    <p>Nenhum campeão com esse HP</p>
                ))}

            <h1>Campeões do LOL</h1>
            <div className="cardsContainers">
                {champions.map((champion: any) => (
                    <CardLol
                        imageFull={getImageUrl(champion.image.full)}
                        name={champion.name}
                        title={champion.title}
                    />
                ))}
            </div> */}
        </div>
    );
}

export default App;
