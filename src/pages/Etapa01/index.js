import React from 'react';

import Pergunta from '../../components/pergunta';

import {
    bacia1Inicial,
    cano1Inicial,
    filtroInicial,
    tanqueReacaoInicial
} from '../../import/imgInicial'

import './styles.css';

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
                    pergunta={"Muito bem, até o momento você já reduziu 95% de todas as partículas suspensas na água, mas para atender as normas do Ministério da Saúde de potabilidade da água necessitamos reduzir esse nível para 99% e retirar as substâncias que promovam a essa água gosto e odor. Temos como ferramenta o sistema de filtragem, selecione no sentido de cima para baixo a ordem das camadas do leito filtrante de um sistema convencional de filtragem lenta."}
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