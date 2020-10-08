import React,{ useState } from 'react';

import { Link } from 'react-router-dom';

import {  back, lagoa  } from '../../import/imgInicial';

import Resposta from '../../components/respostas';
import dadoInicial from '../../data/dados-iniciais.json';

import './pergunta.css';

function Pergunta({ id, etapa, item01, classItem01, item02, classItem02, titulo, pergunta, respostas, errado }) {
    const [resposta, setResposta] = useState(0);
    const [cont, setCont] = useState(0);
    function certo(etapa,id) {
        const idCerto = +id;
        const button = document.getElementsByClassName('myButton')
        for (let i = 0; i < button.length; i++) {
            (i === (idCerto-1)) ? button[i].classList.toggle('certa') : button[i].classList.toggle('errada')
        }

        if(etapa === 1){
            dadoInicial.etapa02 = "1"
        }else if(etapa === 2){
            dadoInicial.etapa03 = "1"
        }else if(etapa === 3){
            dadoInicial.etapa04 = "1"
        }
        localStorage.clear()
        setTimeout(() => {
            setResposta(1)
        }, 1500);
    }
    
    function errado(id) {
        const idCerto = +id;
        const button = document.getElementsByClassName('myButton')
        for (let i = 0; i < button.length; i++) {
            (i === (idCerto-1)) ? button[i].classList.toggle('certa') : button[i].classList.toggle('errada')
        }
        alert("Errado!")
    }

    function fecharResposta() {
        setResposta(0);
    }

    function certoOuErrado(res) {
        if(res === id){
            certo(etapa,id)
        }else{
            errado(id)
        }

    }

    function ultimaPergunta(res) {
        const sequenciaResposta = [2,3,1,4];
        if(sequenciaResposta[cont] === +res ){
            console.log('acertou');
            setCont(cont+1);
            if(cont === 3){
                dadoInicial.etapa05 = "1"
                setResposta(1);
            }
        }else{
            alert('errou!!!!!!');
            setCont(0);
        }

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
                            <p className="myButton" id="1" onClick={ (res) => etapa === 4 ? ultimaPergunta(res.target.id) : certoOuErrado(res.target.id) } >{respostas.pri}</p>
                            <p className="myButton" id="2" onClick={ (res) => etapa === 4 ? ultimaPergunta(res.target.id) : certoOuErrado(res.target.id) } >{respostas.seg}</p>
                            <p className="myButton" id="3" onClick={ (res) => etapa === 4 ? ultimaPergunta(res.target.id) : certoOuErrado(res.target.id) } >{respostas.ter}</p>
                            <p className="myButton" id="4" onClick={ (res) => etapa === 4 ? ultimaPergunta(res.target.id) : certoOuErrado(res.target.id) } >{respostas.qua}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pergunta;