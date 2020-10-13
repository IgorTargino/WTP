import React, { useState ,useEffect } from 'react';

import dadoInicial from '../../data/dados-iniciais.json';

import AcaoClick from '../../components/acaoclick';
import Inicio from '../../components/inicio-fim';

import Lottie from 'react-lottie';

import {
    lagoa,
    balao,
    caixaAgua,
    tub2,
    tub3,
    balao1,
    balao2
} from '../../import/imgInicial.js'

import './home.css';


function Home() {

    const configAnim = {
        loop: false,
        autoplay: false,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const [bacia1, setBacia1] = useState({
        pause:false,
        stop:true
    })
    const [bacia2, setBacia2] = useState({
        pause:false,
        stop:true
    })
    const [tanqueDeReacao, setTanqueDeReacao] = useState({
        pause:false,
        stop:true
    })
    const [filtro, setFiltro] = useState({
        pause:false,
        stop:true
    })

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
                setBacia1({ stop: false });
            }, 3000);
            setInterval(() => {
                setCano2({ stop: false });
            }, 5000);
        
        }
        if (dadoInicial.etapa04 === "1") {
            setInterval(() => {
                setTanqueDeReacao({ stop:false })
            }, 6000);
            setInterval(() => {
                setCano3({ stop: false })
            }, 12000);
            setInterval(() => {
                setBacia2({ stop: false })
            }, 17000);
            setInterval(() => {
                setCano4({ stop: false })
            }, 19000);
        }
        if (dadoInicial.etapa05 === "1") {
            setInterval(() => {
                setFiltro({ stop: false });
            }, 20000);
            setInterval(() => {
                setCano5({ stop: false })
            }, 25000);
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
                        lottie={true}
                        configAnim={configAnim}
                        stop={filtro.stop}
                        pause={filtro.pause}
                    />

                    <div className="bloqueiClick"></div>
                    <img className="balao" src={balao} alt="balao"/>
                    <img className="lagoa" src={lagoa} alt="lagoa"/>
                    <img className="caixaAgua" src={caixaAgua} alt=""/> 
                    <img className="tub2" src={tub2} alt="Tubo do balao 2"/>
                    <img className="tub3" src={tub3} alt="Tubo do balao 3"/>

                    <div className="bacia1">
                        <Lottie 
                            options={
                                {
                                ...configAnim,
                                animationData:  require('../../assets/animação/bacia1.json')
                                }
                            }
                            direction={1}
                            isStopped={bacia1.stop}
                            isPaused={bacia1.pause}/>
                    </div>
                    <div className="bacia2">
                        <Lottie 
                            options={
                                {
                                ...configAnim,
                                animationData:  require('../../assets/animação/bacia2.json')
                                }
                            }
                            direction={1}
                            isStopped={bacia2.stop}
                            isPaused={bacia2.pause}/>
                    </div>
                    <div className="tanqueReacao">
                        <Lottie 
                            options={
                                {
                                ...configAnim,
                                animationData:  require('../../assets/animação/tanque-de-agitacao.json')
                                }
                            }
                            direction={1}
                            isStopped={tanqueDeReacao.stop}
                            isPaused={tanqueDeReacao.pause}/>
                    </div>
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