import logo from '../../assets/logo.png';
import './style.css';

export default function PaginaInicial (){

    return(
        <>
        <div className="logo">
        <img className='logomarca' src={logo} alt="" />
    </div>

    <div className='iniciar'>
        <button className='inicio'> INICIAR </button>

    </div>

    </>

    );
}