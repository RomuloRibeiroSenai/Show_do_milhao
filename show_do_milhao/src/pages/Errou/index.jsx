import { useRef } from 'react';
import errou from '../../assets/imagens/errou.gif';
import erro from '../../assets/sons/erro.mp3';
import './style.css';

export default function Errou (){
    const audio1 = useRef(null)

    const reproduzirAudio = () => {
        if(audio1.current){
            audio1.current.play();
        }
    }



    return(
        <>
        <div className='giffy'>
            <img src={errou} alt="" onClick={reproduzirAudio} />
            <audio ref={audio1} src={erro} type='audio/mp3'></audio>
        </div>
        </>
    );
}