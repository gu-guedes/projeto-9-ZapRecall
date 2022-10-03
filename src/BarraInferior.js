export default function BarraInferior(props){
    return(
        <>
        <div className="footer-concluidos">
            <div className="container-botoes">
                <button onClick={props.alterarStatusVermelho}>não lembrei</button>
                <button onClick={props.alterarStatusLaranja}>quase não lembrei</button>
                <button onClick={props.alterarStatusVerde}>Zap!</button>
            </div>
            <p>CONCLUÍDOS 8/{props.concluidos}</p>
        </div>
        
        </>
    )

}