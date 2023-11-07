import './style.css'

export default function Ajuda(props){
    return(
        <div className="ajuda">

            <div className="opcoes_ajuda">
        dfsdfd
            </div>

            <div className="premiacao">

                <div className="errar">
                    <p>{props.valorErro}fsdf</p>
                </div>

                <div className="parar">
                    <p>{props.valorParar}fsdfs</p>
                </div>

                <div className="acertar">
                    <p>{props.valorAcertar}fsdf</p>
                </div>

            </div>

        </div>
    );
}