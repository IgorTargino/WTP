import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import dadosInicial from '../../data/dados-iniciais.json';

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
                            <h1>S-eta</h1>
                            {
                                status === "comeco" ?
                                <p>Olá, O sistema de tratamento de agua esta com problemas e precisamos da sua ajuda para levar agua limpa para os moradores do parque potira.</p>
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
