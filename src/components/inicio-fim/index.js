import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import dadosInicial from '../../data/dados-iniciais.json';

import './inicio-fim.css';

function InicioFim() {
    const [liga, setLiga] = useState(1);

    function fechar() {
        setLiga(0)
        console.log(liga);
    }

    return(
        <>
            {   
                liga ?
                    <div className="inicioFimContainer">
                        <div className="inicioFimMsg">
                            <h1>S-eta</h1>
                            <p>Olá, O sistema de tratamento de agua esta com problemas e precisamos da sua ajuda para levar agua limpa para os moradores do parque potira.</p>
                            <button type="button" onClick={fechar} className="inicioFimButton"><span>Começar</span></button>
                        </div>
                    </div> : null
            }
        </>
    );
}

export default InicioFim;
