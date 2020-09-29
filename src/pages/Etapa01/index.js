import React from 'react';
import { Link } from 'react-router-dom'

import dadoInicial from '../../data/dados-iniciais.json'

import back from '../../assets/back.png'
import lagoa from '../../assets/1-Lagoa.png'
import bacia1 from '../../assets/bacia1.png'


import './index.css';


function Etapa01() {

    function certo(){
        const button = document.getElementsByClassName('myButton')

        for (let i = 0; i < button.length; i++) {
           (i == 3 )? button[i].classList.toggle('certa') : button[i].classList.toggle('errada')
        }
        dadoInicial.etapa02 = "1"
    }

    function errado() {
        const button = document.getElementsByClassName('myButton')
        console.log("[Button]",button);

        for (let i = 0; i < button.length; i++) {
           (i == 3 )? button[i].classList.toggle('certa') : button[i].classList.toggle('errada')
        }
        alert("Errado!")
    }

    return(
        <>
            <div id="ceu">
                <Link to="/"><img className="home-back" src={back} alt=""/></Link>
                <div className="pergunta">
                    <p>Etapa 1º:<br/></p>
                    <p>
                        Necessitamos diminuir os índices de ferro e manganês dissolvidos, matéria orgânica, bactéria, 
                        vírus e protozoários. Qual substância química podemos usar para oxída-los ?
                    </p>
                </div>
            </div>

            <div id="container">

                <img className="img-lagoa" src={lagoa} alt=""/>
                
                <div className="perguntas">
                    <img src={bacia1} alt=""/>
                    
                    <div className="container-button grid">
                        <p className="myButton" onClick={errado}>NaOCl</p>
                        <p className="myButton" onClick={errado}>NaOH</p>
                        <p className="myButton" onClick={errado}>Al2(SO4)3</p>
                        <p  className="myButton" onClick={certo}>FeSO4</p>
                    </div>
                </div>
            </div>
        </>
    )

} 

export default Etapa01;