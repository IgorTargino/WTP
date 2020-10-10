import React, { useState ,useEffect } from 'react';

import dadoInicial from '../../data/dados-iniciais.json';

import AcaoClick from '../../components/acaoclick';
import Inicio from '../../components/inicio-fim';


import Lottie from 'react-lottie';


import {
    lagoa,
    filtroInicial,
    tanqueReacaoInicial,
    bacia1Inicial,
    bacia2Inicial,
    balao,
    caixaAgua,
    tub2,
    tub3,
    balao1,
    balao2
} from '../../import/imgInicial.js'

import {
    filtroFinal,
    tanqueReacaoFinal,
    bacia1Final,
    bacia2Final,
} from '../../import/imgFinal.js'

import './home.css';


function Home() {
    const [bacia1, setBacia1] = useState(bacia1Inicial)
    const [bacia2, setBacia2] = useState(bacia2Inicial)
    const [tanqueDeReacao, setTanqueDeReacao] = useState(tanqueReacaoInicial)
    const [filtro, setFiltro] = useState(filtroInicial)

    const configAnim = {
        loop: false,
        autoplay: false,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const [cano1, setCano1] = useState({
        pause:false,
        stop:true
    })
    const [cano2, setCano2] = useState({
        pause:false,
        stop:true
    })
    const [cano3, setCano3] = useState({
        pause:false,
        stop:true
    })
    const [cano4, setCano4] = useState({
        pause:false,
        stop:true
    })
    const [cano5, setCano5] = useState({
        pause:false,
        stop:true
    })

    useEffect(() => {
        let ativo = document.querySelectorAll('.ativo');
        let listaDeAtivo = Array.from(ativo);
        if( ativo.length){
            const eMaior = (dadoInicial.etapa05 === "1");
            for (let i = 0; i < (listaDeAtivo.length - (eMaior ? 0 : 1)); i++) {
                listaDeAtivo[i].classList.toggle("ativo");      
            }
        }
    },[]);

    /*Muda a imagem ou da o play na animação*/ 
    useEffect(() => {
        if (dadoInicial.etapa02 === "1") {
            setCano1({ stop:false })
            setInterval(() => {
                setCano2({ stop: false })
            }, 3000);
            setBacia1(bacia1Final);
        
        }
        if (dadoInicial.etapa04 === "1") {
            setInterval(() => {
                setCano3({ stop: false })
            }, 4000);
            setInterval(() => {
                setCano4({ stop: false })
            }, 9000);
            setBacia2(bacia2Final);
            setTanqueDeReacao(tanqueReacaoFinal);
        }
        if (dadoInicial.etapa05 === "1") {
            setInterval(() => {
                setCano5({ stop: false })
            }, 11000);
            setFiltro(filtroFinal);
            dadoInicial.comeca = "3"
        }
    },[])

    function inicio() {
        if((dadoInicial.comeca === "1") && (dadoInicial.etapa02 === "0") ){
            dadoInicial.comeca= "0"
            return(
                <Inicio
                    status="comeco"
                /> 
            );
        }else if(dadoInicial.comeca === "3" ){
            return(
                <Inicio
                    status="fim"
                />
            );
        }else{
            return null;
        }
    }

    return(
        <>
            {
                inicio()
            }
            <div className="ceu"></div>
            <div className="container">
                <div className="game-container">

                    <AcaoClick
                        dados={dadoInicial}
                        dadoInicial={dadoInicial.etapa01}
                        className={"balao1"}
                        src={balao1}
                        etapa={"01"}
                    />
                    <AcaoClick
                        dadoInicial={dadoInicial.etapa02}
                        className={"balao2"}
                        src={balao2}
                        etapa={"02"}
                    />
                    <AcaoClick
                        dadoInicial={dadoInicial.etapa03}
                        className={"balao3"}
                        src={balao2}
                        etapa={"03"}
                    />
                    <AcaoClick
                        dadoInicial={dadoInicial.etapa04}
                        className={"filtro"}
                        src={filtro}
                        etapa={"04"}
                    />
                    <div className="bloqueiClick"></div>

                    <img className="balao" src={balao} alt="balao"/>
                    <img className="lagoa" src={lagoa} alt="lagoa"/>
                    <img className="caixaAgua" src={caixaAgua} alt=""/> 
                    <img className="tub2" src={tub2} alt="Tubo do balao 2"/>
                    <img className="tub3" src={tub3} alt="Tubo do balao 3"/>
                    <img className="bacia1" src={bacia1} alt="bacia"/>
                    <img className="bacia2" src={bacia2} alt="bacia2"/>
                    <img className="tanqueReacao" src={tanqueDeReacao} alt="tanque de reação"/>

                    <div className="cano1">
                        <Lottie 
                            options={
                                {
                                ...configAnim,
                                animationData:  require('../../assets/animação/cano1.json')
                                }
                            }
                            direction={1}
                            isStopped={cano1.stop}
                            isPaused={cano1.pause}/>
                    </div>
                    <div className="cano2">
                        <Lottie 
                            options={
                                {
                                ...configAnim,
                                animationData:  require('../../assets/animação/cano2.json')
                                }
                            }
                            direction={1}
                            isStopped={cano2.stop}
                            isPaused={cano2.pause}/>
                    </div>
                    <div className="cano3">
                        <Lottie 
                            options={
                                {
                                ...configAnim,
                                animationData:  require('../../assets/animação/cano3.json')
                                }
                            }
                            direction={1}
                            isStopped={cano3.stop}
                            isPaused={cano3.pause}/>
                    </div>
                    <div className="cano4">
                        <Lottie 
                            options={
                                {
                                ...configAnim,
                                animationData:  require('../../assets/animação/cano2.json')
                                }
                            }
                            direction={1}
                            isStopped={cano4.stop}
                            isPaused={cano4.pause}/>
                    </div>
                    <div className="cano5">
                        <Lottie 
                            options={
                                {
                                ...configAnim,
                                animationData:  require('../../assets/animação/cano5.json')
                                }
                            }
                            direction={1}
                            isStopped={cano5.stop}
                            isPaused={cano5.pause}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;