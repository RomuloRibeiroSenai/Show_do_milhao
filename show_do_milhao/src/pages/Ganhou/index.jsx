import moedas from '../../assets/imagens/moedas.gif';
import vitoria from '../../assets/imagens/vitoria.jpeg'
import './style.css';

export default function Ganhou (){
    return(
        <><div className='titulo'>
            <h1>PARABÉNS!!</h1>
        </div>
        <div className='moedas'>
            <div className="imagem01">
                <img src={moedas} alt="" />
            </div>
            <div className="imagem02">
                <img src={vitoria} alt=""/>
            </div>
        </div>
            
        </>
    );
}