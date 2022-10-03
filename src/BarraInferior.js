export default function BarraInferior(props){
    return(
        <>
        <div className="footer-concluidos">
            <div className="container-botoes">
                <button data-identifier="forgot-btn" onClick={props.alterarStatusVermelho}>não lembrei</button>
                <button data-identifier="almost-forgot-btn" onClick={props.alterarStatusLaranja}>quase não lembrei</button>
                <button data-identifier="zap-btn" onClick={props.alterarStatusVerde}>Zap!</button>
            </div>
            <p data-identifier="flashcard-counter">CONCLUÍDOS 8/{props.concluidos}</p>
        </div>
        
        </>
    )

}