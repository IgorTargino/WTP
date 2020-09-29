import React from 'react';
import { Link } from 'react-router-dom'

import dadoInicial from '../../data/dados-iniciais.json'

import lagoa from '../../assets/1-Lagoa.png'
//import filtro from '../../assets/Filtro.png'
//import tanqueReacao from '../../assets/tanque_de_reacao.png'
import bacia1 from '../../assets/bacia1.png'
//import bacia2 from '../../assets/bacia2.png'
//import balao from '../../assets/balão4,5,6.png'
//import caixaAgua from '../../assets/caixa_dagua.png'
import cano1 from '../../assets/1-tub v.png'
//import cano2 from '../../assets/cano2.png'
//import cano3 from '../../assets/cano3.png'
//import cano4 from '../../assets/cano4.png'
//import cano5 from '../../assets/cano5.png'


import './index.css';

function Home() {

    return(
        <>
            {console.log(dadoInicial)}

            <div id="ceu"></div>
            <div id="container">
                
                <img className="lagoa" src={lagoa} alt="lagoa"/>

                {dadoInicial.etapa01 === "1" ? 
                    <Link  to="/01"><img className="bacia1" src={bacia1} alt="Bacia"/></Link>
                    : 
                    <img className="bacia1" src={bacia1} alt="lagoa"/>
                }
                {/*
                    {dadoInicial.etapa02 === "1" ? 
                        <Link to="/02"><img src={tanqueReacao} alt="Tanque Reacao"/></Link>
                        : 
                        <img src={tanqueReacao} alt="Tanque Reacao"/>
                    }
                    {dadoInicial.etapa03 === "1"  ? 
                        <Link to="/03"><img src={filtro} alt="Filtro"/></Link>
                        : 
                        <img src={filtro} alt="filtro"/>
                    }
                    {dadoInicial.etapa04 === "1"  ? 
                        <Link to="/04"><img src={balao} alt="Balao"/></Link>
                        : 
                        <img src={balao} alt="balao"/>
                    }*/
                }
                <img id="cano1" src={cano1} alt=""/>
            </div>
            {/*
            <img src={filtro} alt="lagoa"/>
            <img src={tanqueReacao} alt=""/>
            <img src={bacia1} alt=""/>
            <img src={bacia2} alt=""/>
            <img src={bacia3} alt=""/>
            <img src={caixaAgua} alt=""/>
            <img src={cano2} alt=""/>
            <img src={cano3} alt=""/>
            <img src={cano4} alt=""/>
            <img src={cano5} alt=""/>*/
            }
        </>
    )
}

export default Home;