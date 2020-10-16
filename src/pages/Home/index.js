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
        anima: require('../../assets/animação/bacia1-suja.json'),
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
    const [cano51, setCano51] = useState({
        pause:false,
        stop:true
    })
    const [cano52, setCano52] = useState({
        pause:false,
        stop:true
    })

    const [comeca, setComeca] = useState(false) 
    const [statusCano5, setStatusCano5] = useState({
        b1: false,
        b2: false,
        b3: false,
    })

    function ultimaPergunta(res) {
        if(res === '1'){
            setStatusCano5({ ...statusCano5, b1:true })
        }
        else if(res === '2'){
            setStatusCano5({ ...statusCano5, b2:true })

        }else if(res === '3'){
            setStatusCano5({ ...statusCano5, b3:true })
            if(statusCano5.b1 && statusCano5.b2){
                setCano52({ stop: false });
                setComeca(true);
            }
        }
    }
/* clickEtapaFinal */
    function liberarUltimaPergunta() {
        let ativo = document.querySelectorAll('.clickEtapaFinal');
        console.log(ativo);
        let listaDeAtivo = Array.from(ativo);
        for (let i = 0; i < listaDeAtivo.length; i++) {
            listaDeAtivo[i].style.display = "block";      
        }
        
    }

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
        console.log('[Affter]',dadoInicial.etapa06);
        if (dadoInicial.etapa02 === "1") {
            setCano1({ stop:false })
            setInterval(() => {
                setBacia1({...bacia1, stop: false, anima: require('../../assets/animação/bacia1.json')});
            }, 3000);
            setInterval(() => {
                setCano2({ stop: false });
            }, 5000);
        }else{
            setCano1({ stop:false })
            setInterval(() => {
                setBacia1({...bacia1, stop: false});
            }, 3000);
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
                setCano51({ stop: false })
                liberarUltimaPergunta()
            }, 25000);
        }
        if (dadoInicial.etapa06 === "1"){
            setInterval(() => {
                dadoInicial.comeca = "3";
            }, 28000);
        }
    },[comeca])

    function inicio() {
        if((dadoInicial.comeca === "1") && (dadoInicial.etapa02 === "0") ){
            return(
                <Inicio
                    status="comeco"
                /> 
            );
        }else if(dadoInicial.comeca === "3" || comeca ){
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
                    
                    <div id="1" className="ultimoBalao1 clickEtapaFinal" onClick={ (res) => ultimaPergunta(res.target.id) }>{ statusCano5.b1 ? <p>NaOCl</p> : ''}</div>
                    <div id="2" className="ultimoBalao2 clickEtapaFinal" onClick={ (res) => ultimaPergunta(res.target.id) }>{ statusCano5.b2 ? <p>NaF</p> : ''}</div>
                    <div id="3" className="ultimoBalao3 clickEtapaFinal" onClick={ (res) => ultimaPergunta(res.target.id) }>{ statusCano5.b3 ? <p>NaOH</p> : ''}</div>
                    
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
                                animationData:  bacia1.anima
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
                    <div className="tanqueReacao" >
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
                                animationData:  require('../../assets/animação/cano5-p1.json')
                                }
                            }
                            direction={1}
                            isStopped={cano51.stop}
                            isPaused={cano51.pause}/>
                    </div>
                    <div className="cano5">
                        <Lottie 
                            options={
                                {
                                ...configAnim,
                                animationData:  require('../../assets/animação/cano5-p2.json')
                                }
                            }
                            direction={1}
                            isStopped={cano52.stop}
                            isPaused={cano52.pause}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;