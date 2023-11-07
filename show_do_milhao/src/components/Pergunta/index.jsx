import './style.css'
import logo from '../../assets/logo.png'

export default function Pergunta(props) {

    const pergunta_facil = [
        ["pergunta", "resposta_certa", "resposta_errada1", "resposta_errada2", "resposta_errada3"],
        ["pergunta", "resposta_certa", "resposta_errada1", "resposta_errada2", "resposta_errada3"],
        ["pergunta", "resposta_certa", "resposta_errada1", "resposta_errada2", "resposta_errada3"]
    ]

    function arrayAleatorio(arryQq){
        arryQq.sort(() => Math.random () -0.5);

    }

    arrayAleatorio(pergunta_facil[0]);
    console.log(pergunta_facil[0][1]);

    const i = [1,2,3,4]
    i.sort()
    const sort = [pergunta_facil[0][i[0]],pergunta_facil[0][i[1]],pergunta_facil[0][i[2]],pergunta_facil[0][i[3]]] 
    return (
        <>
            <div className="pergunta">
                <div className="text">
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem natus nemo tempore obcaecati </h1>
                </div>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </div>
        </>
    );
}