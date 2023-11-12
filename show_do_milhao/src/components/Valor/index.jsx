import './style.css';
export default function Valor(props) {
    const cor = 'dourado'

    return (
        <>
            <div className={cor}>
                <h1 className= "valor" >{props.valor}</h1>
            </div>
        </>
    );
}