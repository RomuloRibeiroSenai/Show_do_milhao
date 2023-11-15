import { useNavigate, useLocation } from 'react-router-dom';
import App, { escolhe_pergunta_aletoria } from '../../App';
import Valor from '../Valor';
import './style.css';
import { useEffect } from 'react';

export default function Trilha(props) {

    const location = useLocation();
    const  navigate = useNavigate();
    const { nivel, perguntaAtual, escolhePerguntaAletoria } = location.state;

    useEffect(() => {
        // Verifica se a função está presente antes de chamar
        if (escolhePerguntaAletoria) {
            escolhePerguntaAletoria(nivel, perguntaAtual);
        }
    }, [nivel, perguntaAtual, escolhePerguntaAletoria]);

    return (
        <>
            <div className='quadro_de_valores'>
                <div className='fileira_1'>
                    <button onClick={() => navigate('/jogo')}>VOLTAR</button>
                    <Valor valor={"1 MILHÃO"} />


                </div>

                <div className='fileira_2'>
                    <Valor valor={'100 MIL'} />
                    <Valor valor={'200 MIL'} />

                </div>

                <div className='fileira_3'>
                    <Valor valor={'10 MIL'} />
                    <Valor valor={'30 MIL'} />
                    <Valor valor={'50 MIL'} />
                </div>

                <div className='fileira_4'>
                    <Valor valor={'1 MIL'} />
                    <Valor valor={'1 MIL'} />
                    <Valor valor={'3 MIL'} />
                    <Valor valor={'5 MIL'} />
                </div>





            </div>

        </>
    );
}