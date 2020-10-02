import React from 'react';

import { Link } from 'react-router-dom';

function AcaoClick({dadoInicial, className, src, etapa}) {
    return(
        <>
        {console.log(src)}
            {dadoInicial === "1" ? 
                <div className={className} ><Link  to={`/${etapa}`}><img src={src} alt=""/></Link></div>
                :                     
                <div className={className} ><img src={src} alt=""/></div>
            }
        </>
    );
};

export default AcaoClick;