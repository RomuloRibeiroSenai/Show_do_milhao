import { useRef } from 'react';
import moedas from '../../assets/imagens/moedas.gif';
import vitoria from '../../assets/imagens/vitoria.jpeg';
import vitoria_audio from '../../assets/sons/vitoria_audio.mp3';
import './style.css';

export default function Ganhou (){
    const audio1 = useRef(null)

    const reproduzirAudio = () => {
        if(audio1.current){
            audio1.current.play();
        }
    }

    return(
        <><div className='titulo'>
            <h1>PARABÉNS!!</h1>
        </div>
        <div className='moedas'>
            <div className="imagem01">
                <img src={moedas} alt="" />
            </div>
            <div className="imagem02">
                <img src={vitoria} alt="" onClick={reproduzirAudio}/>
                <audio ref={audio1} src={vitoria_audio} type='audio/mp3'></audio>
            </div>
        </div>
            
        </>
    );
}