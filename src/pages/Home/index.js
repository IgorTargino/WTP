import React from 'react';

import dadoInicial from '../../data/dados-iniciais.json'

import AcaoClick from '../../components/acaoclick'

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

import './home.css';


function Home() {

    return(
        <>
            {console.log("[Dados inicaias]",dadoInicial.etapa04)}

            <div className="ceu"></div>
            <div className="container">
                <div className="game-container">

                    <AcaoClick
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
                    <AcaoClick
                        dadoInicial={dadoInicial.etapa05}
                        className={"balao"}
                        src={balao}
                        etapa={"05"}
                    />

                    <img className="lagoa" src={lagoa} alt="lagoa"/>
                    <img className="caixaAgua" src={caixaAgua} alt=""/> 
                    <img className="tub2" src={tub2} alt="Tubo do balao 2"/>
                    <img className="tub3" src={tub3} alt="Tubo do balao 3"/>
                    <img className="bacia1" src={bacia1Inicial} alt="bacia"/>
                    <img className="bacia2" src={bacia2Inicial} alt="bacia2"/>
                    <img className="tanqueReacao" src={tanqueReacaoInicial} alt="tanque de reação"/>
                    <img className="cano1" src={cano1Inicial} alt=""/>
                    <img className="cano2" src={cano2Inicial} alt=""/>
                    <img className="cano3" src={cano3Inicial} alt=""/>
                    <img className="cano4" src={cano2Inicial} alt=""/>
                    <img className="cano5" src={cano5Inicial} alt=""/>
                </div>
            </div>
        </>
    )
}

export default Home;