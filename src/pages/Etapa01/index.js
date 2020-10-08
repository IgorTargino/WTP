import React from 'react';

import dadoInicial from '../../data/dados-iniciais.json';

import Pergunta from '../../components/pergunta';

import {
    bacia1Inicial,
    cano1Inicial,
    filtroInicial,
    tanqueReacaoInicial
} from '../../import/imgInicial'

import './etapa01.css';

function Etapa01(response) {

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
                    id="1"
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
                    id="3"
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
                                qua: "Polímero aniônico" 
                            }}
                    id="4"
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
                    id="1"
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