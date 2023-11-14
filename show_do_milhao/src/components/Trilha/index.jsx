import Valor from '../Valor';
import './style.css';
export default function Trilha(props) {


    return (
        <>
            <div className='quadro_de_valores'>
                <div className='fileira_1'>
                    <Valor valor= {"1 MILHÃO"} />


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