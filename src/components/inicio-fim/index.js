import React, { useState } from 'react';

import './inicio-fim.css';

function Inicio({ status }) {
    const [liga, setLiga] = useState(1);

    function fechar() {
        setLiga(0)
    }
    
    return(
        <>
            {
                liga ?
                    <div className="inicioFimContainer">
                        <div className="inicioFimMsg">
                            <h1>S-ETA</h1>
                            {
                                status === "comeco" ?
                                <>
                                    <p>Olá, me chamo SETA,<br/><br/>
                                    SETA significa Simulador de Estação de tratamento de Água.<br/><br/>
                                    Estou passando por problemas e preciso de sua ajuda para podemos levar água potável até os moradores da cidade de Caucaia.</p>
                                </>
                                :
                                <p>Obrigado, agora todos os moradores podem aproveitar de agua limpa. :)</p>
                            }
                            <button type="button" onClick={fechar} className="inicioFimButton"><span>{status === "comeco" ? "Começar" : "Voltar"}</span></button>
                        </div>
                    </div> : null
            }
        </>
    );
}

export default Inicio;
