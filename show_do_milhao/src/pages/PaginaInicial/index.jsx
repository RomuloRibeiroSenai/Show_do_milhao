import logo from '../../assets/logo.png';
// import comeco from '../../assets/sons/comeco.mp3'
import './style.css';
import { useNavigate } from "react-router-dom";


export default function PaginaInicial (){

    const navigate = useNavigate();

    function iniciar(){
        navigate("/jogo")
    }

    return(
        <>
        <div className="logo">
        <img className='logomarca' src={logo} alt="" />
    </div>

    <div className='iniciar'>
        <button className='inicio' onClick={iniciar}> INICIAR </button>

    </div>

    </>

    );
}