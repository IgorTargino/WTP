import React from 'react';

import dadoInicial from '../../data/dados-iniciais.json'

import './index.css';

function Etapa01() {

    function mudar(){
        dadoInicial.etapa02 = "1"
    }

    return(
        <>
            <p>01</p>
            <p>02</p>
            <p>03</p>
            <p onClick={mudar}>04</p>
        </>
    )

} 

export default Etapa01;