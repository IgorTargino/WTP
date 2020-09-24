import React from 'react';
import { Link } from 'react-router-dom'

import dadoInicial from '../../data/dados-iniciais.json'

import back from '../../assets/back.png'
import lagoa from '../../assets/Lagoa.png'
import bacia1 from '../../assets/bacia1.png'


import './index.css';


function Etapa01() {

    function mudar(){
        const button = document.getElementsByClassName('myButton')

        for (let i = 0; i < button.length; i++) {
           (i == 3 )? button[i].classList.toggle('certa') : button[i].classList.toggle('errada')
        }
        console.log("[Button]",button);
        dadoInicial.etapa02 = "1"
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

                <img src={lagoa} alt=""/>
                
                <div className="teste">
                    <img src={bacia1} alt=""/>
                    
                    <div className="container-button">
                        <p className="myButton">NaOCl</p>
                        <p className="myButton">NaOH</p>
                        <p className="myButton">Al2(SO4)3</p>
                        <p  className="myButton" onClick={mudar}>FeSO4</p>
                    </div>
                </div>
            </div>
        </>
    )

} 

export default Etapa01;