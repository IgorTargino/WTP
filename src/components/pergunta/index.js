import React,{ useState } from 'react';

import { Link } from 'react-router-dom';

import {  back, lagoa  } from '../../import/imgInicial';

import Resposta from '../../components/respostas';
import dadoInicial from '../../data/dados-iniciais.json';

import './pergunta.css';

function Pergunta({ etapa, item01, classItem01, item02, classItem02, titulo, pergunta, respostas, errado }) {
    const [resposta, setResposta] = useState(0);

    function certo(etapa) {
        const button = document.getElementsByClassName('myButton')

        for (let i = 0; i < button.length; i++) {
            (i === 3) ? button[i].classList.toggle('certa') : button[i].classList.toggle('errada')
        }
        if(etapa === 1){
            dadoInicial.etapa02 = "1"
        }else if(etapa === 2){
            dadoInicial.etapa03 = "1"
        }else if(etapa === 3){
            dadoInicial.etapa04 = "1"
        }else if(etapa === 4){
            dadoInicial.etapa05 = "1"
        }
        //dadoInicial.etapa02 = "1"
        localStorage.clear()
        setTimeout(() => {
            setResposta(1)
        }, 1500);
    }
    
    function errado() {
        const button = document.getElementsByClassName('myButton')
        for (let i = 0; i < button.length; i++) {
            (i === 3) ? button[i].classList.toggle('certa') : button[i].classList.toggle('errada')
        }
        alert("Errado!")
    }

    function fecharResposta() {
        setResposta(0);
    }
    return(
        <>
            {
                resposta ? <Resposta
                                etapa={etapa}
                                fechar={fecharResposta}    
                            /> : null
            }
            <div className="ceu">
                <Link to="/"><img className="home-back" src={back} alt="" /></Link>
                <div className="pergunta">
                    <p>{titulo} :<br /></p>
                    <p>
                        {pergunta}
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="game-container">
                    <img className="lagoa" src={lagoa} alt="" />
                    <img className={classItem01} src={item01} alt="" />
                    {item02 ? <img className={classItem02} src={item02} alt=""/> : 
                                <></>
                    }                    
                    <div className="perguntas">
                        <div className="container-button grid">
                            <p className="myButton" onClick={errado} >{respostas.pri}</p>
                            <p className="myButton" onClick={errado} >{respostas.seg}</p>
                            <p className="myButton" onClick={errado} >{respostas.ter}</p>
                            <p className="myButton" onClick={() => certo(etapa)}  >{respostas.qua}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pergunta;