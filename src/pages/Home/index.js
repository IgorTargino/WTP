import React, { Component } from 'react';

import dadoInicial from '../../data/dados-iniciais.json'

import './index.css';

class Home extends Component {

    render(){
        return(
            <>
                <p onClick={()=> console.log(dadoInicial.etapa01)}>teste</p>
            </>
        )
    }
}

export default Home;