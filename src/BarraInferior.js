export default function BarraInferior(props){
    return(
        <>
        <div className="footer-concluidos">
            <div className="container-botoes">
                <button onClick={props.alterarStatusVermelho}>não lembrei</button>
                <button onClick={props.alterarStatusLaranja}>quase não lembrei</button>
                <button onClick={props.alterarStatusVerde}>Zap!</button>
            </div>
            <p>concluidos {props.concluidos}/4</p>
        </div>
        
        </>
    )

}