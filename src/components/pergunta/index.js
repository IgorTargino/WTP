import React from 'react';

import { Link } from 'react-router-dom';

import {  back, lagoa  } from '../../import/imgInicial';

function Pergunta({ item01, item02 , titulo, pergunta, respostas, certo, errado }) {
    
    
    return(
        <>
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
                    <img className="bacia1" src={item01} alt="" />
                    <img className="cano1" src={item02} alt=""/>
                    <div className="perguntas">
                        <div className="container-button grid">
                            <p className="myButton" onClick={errado} >{respostas.pri}</p>
                            <p className="myButton" onClick={errado} >{respostas.seg}</p>
                            <p className="myButton" onClick={errado} >{respostas.ter}</p>
                            <p className="myButton" onClick={certo}  >{respostas.qua}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pergunta;