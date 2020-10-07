import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { back } from '../../import/imgInicial';

import resposta01 from '../../assets/respostas/reaçoes 1.png';
import resposta0201 from '../../assets/respostas/2-hidrolise 1.png';
import resposta0202 from '../../assets/respostas/2-neutralização 1.png';
import resposta03 from '../../assets/respostas/Floculação 1.png';
import resposta04 from '../../assets/respostas/4-carvão 1.png';

import './respostas.css';

function Resposta({ fechar, etapa }) {
    const [proximaTela, setProximaTela] = useState(1);
    const [imagemAtual, setimagemAtual] = useState();
    const [respostaAtual, setRespostaAtual] = useState();

    useEffect(()=>{
        if(etapa === 1){
            setimagemAtual(resposta01);
            setRespostaAtual('Isso mesmo, o HOCl (ácido hipocloroso) formado acabou de atravessar as membranas celulares dos microrganismos provocando-o a oxidação de seu alimento (proteína), quebra do mecanismo de replicação do DNA e a simples inibição das enzimas responsáveis pelo seu processo respiratório.')
        }else if(etapa === 2){
            setimagemAtual(resposta0201);
            setRespostaAtual('O processo de coagulação consiste na neutralização dos coloides carregados negativamente, assim possibilitando a aglomeração, formando pequenos flocos e com uma água de baixa agitação há a precipitação dos coágulos formados.');
        }else if(etapa === 3){
            setimagemAtual(resposta03);
            setRespostaAtual('Devido ao polímero possuir uma grande cadeia molecular há uma geração de pontes entre as partículas já coaguladas a cadeia do polímero, gerando flocos de maior diâmetro.');     
        }else if(etapa === 4){
            setimagemAtual(resposta04);
            setRespostaAtual('O filtro cumpriu sua função e reteu a  maior parte dos sólidos restantes e com a ajuda do carvão ativado houve uma adsorção de outras substâncias que promoviam gosto de odor.         Pronto,  após a passgem pelo filtro a água torno-se cristalina e perfeita para beber a olho nu do homem, mas para atender as normas de potabilidade da água deve-se ser adicionado uma quantiade de minima novamente de cloro livre na água, assim sevindo de blindagem para os futuros microorganimos que possam aparecer no caminho até dua casa.');
        }
    },[])
    
    return(
        <>
            <div className="respostaContainer">
                <div className="respostaMsg">
                    <img onClick={fechar} className="resposta-back" src={back} alt=""/>
                    <h1>S-eta</h1>
                    {
                        proximaTela ? 
                        <>
                            <p>{respostaAtual}</p>
                            <div className="div-button">
                                <button type="button" onClick={() => setProximaTela(0)} className="respostaButton"><span>Proximo</span></button>
                             </div>
                        </> : 
                        <>
                            <img src={imagemAtual} alt=""/>
                            {
                                etapa === 2 ? <img src={resposta0202} alt=""/> : null
                            }
                            <Link to="/"><span>Home</span></Link>
                        </>
                    }
                    
                </div>
            </div>
        </>
    );
}

export default Resposta;
