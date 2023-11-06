
export default function Pergunta(props) {

    const pergunta_facil = [
        ["pergunta", "resposta_certa", "resposta_errada1", "resposta_errada2", "resposta_errada3"]
    ]

    function aleatorio(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min);
    }

    i = aleatorio(1,4)
    return (
        <>
            <div>{pergunta_facil[0][0]}</div>
            <div>{pergunta_facil[0][i[0]]}</div>
            <div>{pergunta_facil[0][i[1]]}</div>
            <div>{pergunta_facil[0][i[2]]}</div>
            <div>{pergunta_facil[0][i[3]]}</div>
        </>
    );
}