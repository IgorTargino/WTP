import React from 'react';

import Pergunta from '../../components/pergunta';

import {
    bacia1Inicial,
    cano1Inicial,
    filtroInicial,
    tanqueReacaoInicial
} from '../../import/imgInicial'

import './etapa01.css';

function Etapa01() {

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
                                ter: "",
                                qua: "FeSO4" 
                            }}
                    id="1"
                    // <span>Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub></span>
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
                                qua: "Polímero aniônico." 
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
                    pergunta={"O filtro cumpriu sua função e reteve a maior parte dos sólidos restantes, com a ajuda do carvão ativado houve uma adsorção de outras substâncias que promoviam gosto e odor. Pronto, após a passagem pelo filtro a água tornou-se cristalina e perfeita para beber a olho nu do homem, mas para atender as normas de potabilidade da água deve-se ser adicionado uma quantidade de mínima novamente de cloro livre na água, assim servindo de blindagem para os futuros microrganismos que possam aparecer no caminho até as  casa dos moradores."}
                    item01={filtroInicial}
                    classItem01={"filtroEtapa"}
                    respostas={{pri: "Carvão ativo",
                                seg: "Pedregulho",
                                ter: "Areia grossa",
                                qua: "Areia fina" 
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