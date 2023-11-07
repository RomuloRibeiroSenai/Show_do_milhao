import './style.css'
import logo from '../../assets/logo.png'

export default function Pergunta(props) {

    // const pergunta_facil = [
    //     ["pergunta", "resposta_certa", "resposta_errada1", "resposta_errada2", "resposta_errada3"],
    //     ["pergunta", "resposta_certa", "resposta_errada1", "resposta_errada2", "resposta_errada3"],
    //     ["pergunta", "resposta_certa", "resposta_errada1", "resposta_errada2", "resposta_errada3"]
    // ]



    // const i = [1,2,3,4].sort(() => Math.random() - 0.5);
    
    return (
        <>
            <div className="pergunta">
                <div className="text">
                    <h1>{props.pergunta} </h1>
                </div>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </div>
        </>
    );
}