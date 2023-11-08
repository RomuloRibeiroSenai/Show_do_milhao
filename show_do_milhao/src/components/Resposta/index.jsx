import { useState } from 'react';
import './style.css'

export default function Resposta(props) {
    //usar um state para ver o texto do componente 
    const [classe_bt, setClasse_bt] = useState('vermelho')

    function clicou(props) {
        if(props.texto == props.certa){
            setClasse_bt('amarelo')
            console.log("foi")
        } else {
            console.log(props.certa)
        }
    }
    return (
        <div className="resposta01">

            <button onClick={clicou} className={classe_bt}>{props.texto}</button>

        </div>
    );
}