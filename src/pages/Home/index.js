import React from 'react';
import { Link } from 'react-router-dom'

import dadoInicial from '../../data/dados-iniciais.json'

import lagoa from '../../assets/1-Lagoa.png'
import filtro from '../../assets/4-baciaa.png'
import tanqueReacao from '../../assets/2-baciaa.png'
import bacia1 from '../../assets/bacia1.png'
import bacia2 from '../../assets/3-baciaa.png'
import balao from '../../assets/balão-5.png'
import caixaAgua from '../../assets/6-tanque.png'
import cano1 from '../../assets/1-tub v.png'
import cano2 from '../../assets/2-tub v.png'
import cano3 from '../../assets/3-tub v.png'
import cano5 from '../../assets/5-tub v.png'


import './index.css';

function Home() {

    return(
        <>
            {console.log(dadoInicial)}

            <div id="ceu"></div>
            <div id="container">
                <div className="game-container">
                    <img className="lagoa" src={lagoa} alt="lagoa"/>

                    {dadoInicial.etapa01 === "1" ? 
                        <Link  to="/01"><img className="bacia1" src={bacia1} alt="Bacia"/></Link>
                        : 
                        <img className="bacia1" src={bacia1} alt="lagoa"/>
                    }
                    {dadoInicial.etapa02 === "1" ? 
                        <Link to="/02"><img id="tanqueReacao" src={tanqueReacao} alt="Tanque Reacao"/></Link>
                        : 
                        <img id="tanqueReacao" src={tanqueReacao} alt="Tanque Reacao"/>
                    }
                    {dadoInicial.etapa03 === "1"  ? 
                        <Link to="/03"><img className="filtro" src={filtro} alt="Filtro"/></Link>
                        : 
                        <img className="filtro" src={filtro} alt="filtro"/>
                    }
                    {dadoInicial.etapa04 === "1"  ? 
                        <div className="balao" ><Link to="/04"><img src={balao} alt="Balao"/></Link></div>
                        : 
                        <img className="balao" src={balao} alt="balao"/>
                    }
                    
                    <img id="bacia2" src={bacia2} alt=""/>
                    <img id="caixaAgua" src={caixaAgua} alt=""/>

                    <img id="cano1" src={cano1} alt=""/>
                    <img id="cano2" src={cano2} alt=""/>
                    <img id="cano3" src={cano3} alt=""/>
                    <img id="cano4" src={cano2} alt=""/>
                    <img id="cano5" src={cano5} alt=""/>
                </div>
            </div>
        </>
    )
}

export default Home;