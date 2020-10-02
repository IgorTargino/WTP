import React from 'react';

import { Link } from 'react-router-dom';

function AcaoClick({dadoInicial, className, src, etapa}) {
    
    function setEtapa(){
        localStorage.setItem('etapa',etapa);
    }

    return(
        <>
            {dadoInicial === "1" ? 
                <div className={className} ><Link  to={`/pergunta`}><img onClick={setEtapa} src={src} alt=""/></Link></div>
                :                     
                <div className={className} ><img src={src} alt=""/></div>
            }
        </>
    );
};

export default AcaoClick;