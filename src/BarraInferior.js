export default function BarraInferior(props){
    return(
        <>
        <div className="footer-concluidos">
            <div className="container-botoes">
                <button onClick={props.alterarStatus}>não lembrei</button>
                <button onClick={props.alterarStatus}>quase não lembrei</button>
                <button onClick={props.alterarStatus}>Zap!</button>
            </div>
        </div>
        </>
    )

}