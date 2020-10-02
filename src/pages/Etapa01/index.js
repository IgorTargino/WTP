import React from 'react';
import { Link } from 'react-router-dom'

import dadoInicial from '../../data/dados-iniciais.json'

import {
    lagoa,
    back,
    bacia1Inicial,
    cano1Inicial,
} from '../../import/imgInicial'

import './etapa01.css';

function Etapa01() {

    function certo() {
        const button = document.getElementsByClassName('myButton')

        for (let i = 0; i < button.length; i++) {
            (i === 3) ? button[i].classList.toggle('certa') : button[i].classList.toggle('errada')
        }
        dadoInicial.etapa02 = "1"
    }

    function errado() {
        const button = document.getElementsByClassName('myButton')
        console.log("[Button]", button);

        for (let i = 0; i < button.length; i++) {
            (i === 3) ? button[i].classList.toggle('certa') : button[i].classList.toggle('errada')
        }
        alert("Errado!")
    }

    return (
        <>
            <div className="ceu">
                <Link to="/"><img className="home-back" src={back} alt="" /></Link>
                <div className="pergunta">
                    <p>Etapa 1º:<br /></p>
                    <p>
                        Necessitamos diminuir os índices de ferro e manganês dissolvidos, matéria orgânica, bactéria,
                        vírus e protozoários. Qual substância química podemos usar para oxída-los ?
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="game-container">
                    <img className="lagoa" src={lagoa} alt="" />
                    <img className="bacia1" src={bacia1Inicial} alt="" />
                    <img className="cano1" src={cano1Inicial} alt=""/>
                    <div className="perguntas">
                        <div className="container-button grid">
                            <p className="myButton" onClick={errado}>NaOCl</p>
                            <p className="myButton" onClick={errado}>NaOH</p>
                            <p className="myButton" onClick={errado}>Al2(SO4)3</p>
                            <p className="myButton" onClick={certo}>FeSO4</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Etapa01;