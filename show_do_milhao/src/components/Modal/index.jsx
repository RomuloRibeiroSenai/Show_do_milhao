import a_mil_reais from '../../assets/sons_perguntas/a_mil_reais.mp3';
import aa_mil_reais from '../../assets/sons_perguntas/aa_mil_reais.mp3';
import c_tres_mil from '../../assets/sons_perguntas/c_tres_mil.mp3';
import e_cinco_mil from '../../assets/sons_perguntas/e_cinco_mil.mp3';
import f_dez_mil from '../../assets/sons_perguntas/f_dez_mil.mp3';
import h_trinta_mil from '../../assets/sons_perguntas/h_trinta_mil.mp3';
import j_cinquenta_mil from '../../assets/sons_perguntas/j_cinquenta_mil.mp3';
import k_cem_mil from '../../assets/sons_perguntas/k_cem_mil.mp3';
import l_duzentos_mil from '../../assets/sons_perguntas/l_duzentos_mil.mp3';
import p_um_milhao from '../../assets/sons_perguntas/p_um_milhao.mp3';
import Valor from '../Valor';
import './style.css';



export default function Modal(props) {


    return (
        <>
            <div className='sobrepor'>
                <div className='conteudo'>
                    <div className='quadro_de_valores'>
                        <div className='fileira_1'>
                            <Valor milhao = {true}  valor={"1 MILHÃO"} voltar={props.fechar} audio={p_um_milhao} />


                        </div>

                        <div className='fileira_2'>
                            <Valor cor = {'dourado'} valor={'100 MIL'} voltar={props.fechar} audio={k_cem_mil} />
                            <Valor cor = {'dourado'} valor={'200 MIL'} voltar={props.fechar} audio={l_duzentos_mil} />

                        </div>

                        <div className='fileira_3'>
                            <Valor cor = {'dourado'} valor={'10 MIL'} voltar={props.fechar} audio={f_dez_mil} />
                            <Valor cor = {'dourado'} valor={'30 MIL'} voltar={props.fechar} audio={h_trinta_mil} />
                            <Valor cor = {'dourado'} valor={'50 MIL'} voltar={props.fechar} audio={j_cinquenta_mil} />
                        </div>

                        <div className='fileira_4'>
                            <Valor cor = {'dourado'} valor={'1 MIL'} voltar={props.fechar} audio={a_mil_reais} />
                            <Valor cor = {'dourado'} valor={'1 MIL'} voltar={props.fechar} audio={aa_mil_reais} />
                            <Valor cor = {'dourado'} valor={'3 MIL'} voltar={props.fechar}  audio={c_tres_mil}/>
                            <Valor cor = {'dourado'} valor={'5 MIL'} voltar={props.fechar} audio={e_cinco_mil} />
                        </div>





                    </div>
                </div>
            </div>

        </>
    );
}