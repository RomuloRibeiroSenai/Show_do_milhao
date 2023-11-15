import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/imagens/logo.png';
import abertura from '../../assets/sons/abertura.mp3';
import comeco from '../../assets/sons/comeco.mp3';
import './style.css';


export default function PaginaInicial (){

    const navigate = useNavigate();
    const audio1 = useRef(null);
    const audio2 = useRef(null);

    function iniciar(){

        navigate("/jogo")
    }

    
    const reproduzirAudio = () => {
        if(audio1.current){
            audio1.current.play();

            audio1.current.addEventListener('ended', () => {
                if(audio2.current){
                    audio2.current.play();
                }
            });
        }
    }


    return(
        <>
        <div className="logo">
        <img className='logomarca' src={logo} alt="" onClick={reproduzirAudio} />
        <audio ref={audio1} src={comeco} type='audio/mp3'></audio>
        <audio ref={audio2} src={abertura} type='audio/mp3'></audio>

    </div>

    <div className='iniciar'>
        <button className='inicio' onClick={iniciar}> INICIAR </button>
        

    </div>

    </>

    );
}