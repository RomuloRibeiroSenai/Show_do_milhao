

import React, { useEffect, useState } from 'react';
import './style.css';

export default function Alternativa(props) {

    const [cor, setCor] = useState('vermelho');

    // Use useEffect para monitorar a prop alternativaSelecionada
    useEffect(() => {
        if (props.alternativa === props.alternativaSelecionada && props.alternativaCorreta != props.alternativa) {
            setCor('laranja');
        } else if (props.alternativaCorreta == props.alternativa) {
            setCor('verde');
        } else {
            setCor('vermelho');
        }
    }, [props.alternativaSelecionada, props.alternativa, props.alternativaCorreta]);


    return (
        <button
            className={cor}
            onClick={() => props.onClick(props.alternativa)}
        >
            {props.alternativa}
        </button>
    );
}