import errou from '../../assets/imagens/errou.gif';
import './style.css';

export default function Errou (){
    return(
        <>
        <div className='giffy'>
            <img src={errou} alt="" />
        </div>
        </>
    );
}