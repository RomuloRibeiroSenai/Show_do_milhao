import React, { useEffect, useState } from 'react';
import './style.css';

export default function Alternativa(props) {

    const [cor, setCor] = useState('vermelho');

    // Use useEffect para monitorar a prop alternativaSelecionada
    useEffect(() => {
        if (props.alternativa === props.alternativaSelecionada) {
            setCor('laranja');
        } else if (props.alternativaCerta == true) {
            setCor('verde');
        } else {
            setCor('vermelho');
        }
    }, [props.alternativaSelecionada, props.alternativa]);


    return (
        <button
            className={cor}
            onClick={() => props.onClick(props.alternativa)}
        >
            {props.alternativa}
        </button>
    );
}