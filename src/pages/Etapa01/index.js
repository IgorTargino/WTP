import React from 'react';

import dadoInicial from '../../data/dados-iniciais.json'

import Pergunta from '../../components/pergunta'

import {
    bacia1Inicial,
    cano1Inicial,
    filtroInicial,
    tanqueReacaoInicial
} from '../../import/imgInicial'

import './etapa01.css';

function Etapa01(response) {
    function certo(etapa) {
        const button = document.getElementsByClassName('myButton')

        for (let i = 0; i < button.length; i++) {
            (i === 3) ? button[i].classList.toggle('certa') : button[i].classList.toggle('errada')
        }
        if(etapa === 1){
            dadoInicial.etapa02 = "1"
        }else if(etapa === 2){
            dadoInicial.etapa03 = "1"
        }else if(etapa === 3){
            dadoInicial.etapa04 = "1"
        }else if(etapa === 4){
            dadoInicial.etapa05 = "1"
        }
        //dadoInicial.etapa02 = "1"
        localStorage.clear()
    }

    function errado() {
        const button = document.getElementsByClassName('myButton')
        //console.log("[Button]", button);

        for (let i = 0; i < button.length; i++) {
            (i === 3) ? button[i].classList.toggle('certa') : button[i].classList.toggle('errada')
        }
        alert("Errado!")
    }
    
    function perguntaCera(){
        const etapa = localStorage.getItem('etapa');

        if(etapa === "01"){
            return(
                <Pergunta
                    etapa={1}
                    titulo={"Etapa 01"}
                    pergunta={"Necessitamos diminuir os índices de ferro e manganês dissolvidos, matéria orgânica, bactéria, vírus e protozoários. Qual substância química podemos usar para oxída-los ?"}
                    item01={bacia1Inicial}
                    classItem01={"bacia1"}
                    item02={cano1Inicial}
                    classItem02={"cano1"}
                    respostas={{pri: "NaOCl",
                                seg: "NaOH",
                                ter: "Al2(SO4)3",
                                qua: "FeSO4" 
                            }}
                    certo={certo}
                    errado={errado}
                />
            );
        }

        if(etapa === "02"){
            return(
                <Pergunta
                    etapa={2}
                    titulo={"Etapa 02"}
                    pergunta={"Nos ajude a reduzir a turbidez da água proveniente dos coloides presentes. Use um desses produtos para realizar o processo de coagulação. "}
                    item01={tanqueReacaoInicial}
                    classItem01={"tanqueReacaoEtapa"}
                    respostas={{pri: "NaOCl",
                                seg: "NaOH",
                                ter: "Al2(SO4)3",
                                qua: "FeSO4" 
                            }}
                    certo={certo}
                />
            );
        }

        if(etapa === "03"){
            return(
                <Pergunta
                    etapa={3}
                    titulo={"Etapa 03"}
                    pergunta={"Os coloides neutralizados formados ainda não possuem peso suficiente para sedimentarem, o que podemos adicionar para aumentar os flocos já formados? "}
                    item01={tanqueReacaoInicial}
                    classItem01={"tanqueReacaoEtapa"}
                    respostas={{pri: "NaOCl",
                                seg: "NaOH",
                                ter: "Al2(SO4)3",
                                qua: "FeSO4" 
                            }}
                    certo={certo}
                />
            );
        }

        if(etapa === "04"){
            return(
                <Pergunta
                    etapa={4}
                    titulo={"Etapa 04"}
                    pergunta={"Os coloides neutralizados formados ainda não possuem peso suficiente para sedimentarem, o que podemos adicionar para aumentar os flocos já formados? "}
                    item01={filtroInicial}
                    classItem01={"filtroEtapa"}
                    respostas={{pri: "NaOCl",
                                seg: "NaOH",
                                ter: "Al2(SO4)3",
                                qua: "FeSO4" 
                            }}
                    certo={certo}
                />
            );
        }
    }

    return (
        <>
            {
                perguntaCera()
            }
        </>
    )

}

export default Etapa01;