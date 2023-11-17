import { useEffect, useRef, useState } from 'react';
import './style.css';
export default function Valor(props) {
    const [cor, setCor] = useState('dourado');
    const audio = useRef(null);
    const [tocarAudio, setTocarAudio] = useState(false);


    useEffect(() => {
        const fimDoAudio = () => {
            if (props.voltar) {
                props.voltar();
            }
        };

        if (audio.current) {
            audio.current.addEventListener('ended', fimDoAudio);
        }
    }, [props.voltar]);

    const aoClicar = () => {
        setTocarAudio(true);
        
    };



    useEffect(() => {
        if (tocarAudio && props.audio && audio.current) {
            audio.current.play();
        }
    }, [tocarAudio, props.audio]);



    return (
        <>
            <div className='valor'>
                <button
                    id={props.identificador}
                    className={props.cor}
                    onClick={aoClicar}
                    >
                        {props.valor}
                    </button>
                {props.audio && <audio ref={audio} src={props.audio} type='audio/mp3'></audio>}

            </div>
        </>
    );
}