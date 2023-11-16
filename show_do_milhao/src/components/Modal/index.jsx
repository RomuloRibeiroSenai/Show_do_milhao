import Valor from '../Valor';
import './style.css';


export default function Modal(props) {


    return (
        <>
            <div className='sobrepor'>
                <div className='conteudo'>
                    <div className='quadro_de_valores'>
                        <div className='fileira_1'>
                            <Valor milhao = {true} cor = {'dourado'} valor={"1 MILHÃO"} />


                        </div>

                        <div className='fileira_2'>
                            <Valor cor = {'dourado'} valor={'100 MIL'} voltar={props.fechar} />
                            <Valor cor = {'dourado'} valor={'200 MIL'} voltar={props.fechar} />

                        </div>

                        <div className='fileira_3'>
                            <Valor cor = {'dourado'} valor={'10 MIL'} voltar={props.fechar} />
                            <Valor cor = {'dourado'} valor={'30 MIL'} voltar={props.fechar} />
                            <Valor cor = {'dourado'} valor={'50 MIL'} voltar={props.fechar} />
                        </div>

                        <div className='fileira_4'>
                            <Valor cor = {'dourado'} valor={'1 MIL'} voltar={props.fechar} />
                            <Valor cor = {'dourado'} valor={'1 MIL'} voltar={props.fechar} />
                            <Valor cor = {'dourado'} valor={'3 MIL'} voltar={props.fechar} />
                            <Valor cor = {'dourado'} valor={'5 MIL'} voltar={props.fechar} />
                        </div>





                    </div>
                </div>
            </div>

        </>
    );
}