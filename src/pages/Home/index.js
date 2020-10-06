import React, { useState ,useEffect } from 'react';

import dadoInicial from '../../data/dados-iniciais.json';

import AcaoClick from '../../components/acaoclick';
import Inicio from '../../components/inicio-fim';

import {
    lagoa,
    filtroInicial,
    tanqueReacaoInicial,
    bacia1Inicial,
    bacia2Inicial,
    balao,
    caixaAgua,
    cano1Inicial,
    cano2Inicial,
    cano3Inicial,
    cano5Inicial,
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
    cano1Final,
    cano2Final,
    cano3Final,
    cano5Final
} from '../../import/imgFinal.js'

import './home.css';


function Home() {
    const [canos, setCano] = useState({
        cano1: cano1Inicial,
        cano2: cano2Inicial,
        cano3: cano3Inicial,
        cano4: cano2Inicial,
        cano5: cano5Inicial,
    });
    const [bacia1, setBacia1] = useState(bacia1Inicial)
    const [bacia2, setBacia2] = useState(bacia2Inicial)
    const [tanqueDeReacao, setTanqueDeReacao] = useState(tanqueReacaoInicial)

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

    useEffect(() => {
        if (dadoInicial.etapa02 === "1") {
            setCano({
                ...canos,
                cano1: cano1Final,
                cano2: cano2Final,
            });
            setBacia1(bacia1Final);
        
        }
        if (dadoInicial.etapa04 === "1") {
            setCano({
                ...canos,
                cano1: cano1Final,
                cano2: cano2Final,
                cano3: cano3Final,
                cano4: cano2Final,
            });
            setBacia1(bacia1Final);
            setBacia2(bacia2Final);
            setTanqueDeReacao(tanqueReacaoFinal);
        }
        if (dadoInicial.etapa05 === "1") {
            setCano({
                ...canos,
                cano1: cano1Final,
                cano2: cano2Final,
                cano3: cano3Final,
                cano4: cano2Final,
                cano5: cano5Final
            });
            dadoInicial.comeca = "3"
        }
        },[])

    function inicio() {
        if((dadoInicial.comeca === "1") && (dadoInicial.etapa02 === "0") ){
            {dadoInicial.comeca= "0"}
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
                        src={filtroInicial}
                        etapa={"04"}
                    />

                    <img className="balao" src={balao} alt="balao"/>
                    <img className="lagoa" src={lagoa} alt="lagoa"/>
                    <img className="caixaAgua" src={caixaAgua} alt=""/> 
                    <img className="tub2" src={tub2} alt="Tubo do balao 2"/>
                    <img className="tub3" src={tub3} alt="Tubo do balao 3"/>
                    <img className="bacia1" src={bacia1} alt="bacia"/>
                    <img className="bacia2" src={bacia2} alt="bacia2"/>
                    <img className="tanqueReacao" src={tanqueDeReacao} alt="tanque de reação"/>
                    <img className="cano1" src={canos.cano1} alt=""/>
                    <img className="cano2" src={canos.cano2} alt=""/>
                    <img className="cano3" src={canos.cano3} alt=""/>
                    <img className="cano4" src={canos.cano4} alt=""/>
                    <img className="cano5" src={canos.cano5} alt=""/>
                </div>
            </div>
        </>
    )
}

export default Home;