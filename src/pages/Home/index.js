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
import tub2 from '../../assets/tub-balao-2.png'
import tub3 from '../../assets/tub-balao-3.png'
import balao2 from'../../assets/balao2.png'




import './index.css';
import { unstable_batchedUpdates } from 'react-dom';

function Home() {

    return(
        <>
            {console.log(dadoInicial)}

            <div className="ceu"></div>
            <div className="container">
                <div className="game-container">
                    <img className="lagoa" src={lagoa} alt="lagoa"/>

                    {dadoInicial.etapa01 === "1" ? 
                        <Link  to="/01"><img className="bacia1" src={bacia1} alt="Bacia"/></Link>
                        : 
                        <img className="bacia1" src={bacia1} alt="lagoa"/>
                    }
                    {dadoInicial.etapa02 === "1" ? 
                        <Link to="/02"><img className="balao2" src={balao2} alt="Balao 2"/></Link>
                        : 
                        <img className="balao2" src={balao2} alt="Balao 2"/>
                    }
                    {dadoInicial.etapa03 === "1"  ? 
                        <div className="balao3" ><Link to="/03"><img src={balao2} alt="balao3"/></Link></div>
                        : 
                        <div className="balao3" ><img src={balao2} alt="balao3"/></div>
                    }
                    {dadoInicial.etapa04 === "1"  ? 
                        <div className="filtro" ><Link to="/04"><img src={filtro} alt="filtro"/></Link></div>
                        : 
                        <div className="filtro" ><img src={filtro} alt="filtro"/></div>
                    }
                    <img className="tub2" src={tub2} alt="Tubo do balao 2"/>
                    <img className="tub3" src={tub3} alt="Tubo do balao 3"/>
                    <img className="tanqueReacao" src={tanqueReacao} alt="tanque de reação"/>
                    <img className="bacia2" src={bacia2} alt=""/>
                    <img className="caixaAgua" src={caixaAgua} alt=""/> 
                    <img className="cano1" src={cano1} alt=""/>
                    <img className="cano2" src={cano2} alt=""/>
                    <img className="cano3" src={cano3} alt=""/>
                    <img className="cano4" src={cano2} alt=""/>
                    <img className="cano5" src={cano5} alt=""/>
                </div>
            </div>
        </>
    )
}

export default Home;