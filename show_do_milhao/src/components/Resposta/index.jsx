import { useState } from 'react';
import './style.css'

export default function Resposta(props) {

    const [classe_bt, setClasse_bt] = useState('vermelho')

    function clicou() {
        setClasse_bt('amarelo')
        setTimeout(() => {
            setClasse_bt('vermelho')
        }, 1000);
    }
    return (
        <div className="resposta01">

            <button onClick={clicou} className={classe_bt}>{props.texto}</button>

        </div>
    );
}