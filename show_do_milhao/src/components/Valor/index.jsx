import { useEffect, useState } from 'react';
import './style.css';
export default function Valor(props) {
    const [cor, setCor] = useState ('dourado');
    const [identificador, setIdentificador] = useState('');

    useEffect(() =>{
        if(props.voltar){
            setCor('cinza');
        }
    }, [props.voltar, props.fechar]);

    useEffect(() =>{
        if(props.milhao){
            setIdentificador('milhao');
        }
    })



    return (
        <>
            <div className='valor'>
                <button id={identificador} className={props.cor} onClick={props.voltar}>{props.valor}</button>
            </div>
        </>
    );
}