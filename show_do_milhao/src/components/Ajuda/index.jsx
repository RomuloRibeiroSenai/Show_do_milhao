import './style.css'
import uno2 from '../../assets/uno2.png'
import canguru from '../../assets/canguru.png'

export default function Ajuda(props) {
    return (
        <div className="ajuda01">

            <div className="opcoes_ajuda">
                <div className="pular">
                    <img src={canguru} alt="imagem de canguru para pular " />
                    <p>pular</p>
                </div>

                <div className="eliminar_duas">
                    <img src={uno2} alt="carta para remover 2 alternativas" />
                    <p>eliminar duas</p>
                </div>
            </div>

            <div className="premiacao">

                <div className="errar">
                    <p>{props.valorErro}</p>
                    
                </div>
                <div className="btn_parar">
                    <button>{props.valorParar}</button>
                </div>
                <div className="acertar">
                    <p>{props.valorAcertar}</p>
                </div>
            </div>
            <div className='div_letras'>
                <div>Erro</div>
                <div>Parar</div>
                <div>Acerto</div>
            </div>
        </div>
    );
}