import React from 'react';

import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';


function AcaoClick({ dados ,dadoInicial, className, src, etapa, lottie, configAnim, stop, pause}) {
    
    function setEtapa(etapa){
        localStorage.setItem('etapa',etapa);
    }
    function isAtivo(){
        if(etapa === '4' && dadoInicial === '1'){
            return false
        }
        if( dadoInicial === '1'){
            return true
        }
    }

    function anima() {
        if(lottie){
            return(
                <div className={isAtivo() ? `${className} + ativo` : className } onClick={() => setEtapa(etapa)} >
                    <Link  to={dadoInicial === "1" ? `/pergunta` : '' }>
                        <Lottie 
                            options={
                                {
                                ...configAnim,
                                animationData:  require(`../../assets/animação/filtro.json`)
                                }
                            }
                            direction={1}
                            isStopped={stop}
                            isPaused={pause}/>
                    </Link>
                </div>
            );
        }else{
            return(
                <div className={className} >
                    <Link  to={ dadoInicial === "1" ? `/pergunta` : '' }>
                        <img className={ isAtivo() ? 'ativo' : null } onClick={() => setEtapa(etapa)} src={src} alt=""/>
                    </Link>
                </div>
            );
        }
    }
    return(
        <>
            {anima()}
        </>
    );
};

export default AcaoClick;