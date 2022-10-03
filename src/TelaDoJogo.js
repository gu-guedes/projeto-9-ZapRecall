import BarraInferior from "./BarraInferior"
import ListaDeCartas from "./ListaDeCartas"
import React from "react"
export default function TelaDoJogo() {
    const [cartaSelecionada, setCartaSelecionada] = React.useState([])
    const [botaoVerde, setBotaoVerde] = React.useState([])
    const [botaoVermelho, setBotaoVermelho] = React.useState([])
    const [botaoLaranja, setBotaoLaranja] = React.useState([])

    let concluidos = botaoVerde.length + botaoLaranja.length + botaoVermelho.length


    function alterarStatusVermelho() {
        if(cartaSelecionada.length !== 0 ){

        setBotaoVermelho([... botaoVermelho, cartaSelecionada[0]])
        setCartaSelecionada([])}
    }
    console.log(botaoVermelho)

    function alterarStatusLaranja() {
        if(cartaSelecionada.length !== 0 ){
        setBotaoLaranja([... botaoLaranja, cartaSelecionada[0]])
        setCartaSelecionada([])}

    }
    function alterarStatusVerde() {
        if(cartaSelecionada.length !== 0 ){
        setBotaoVerde([... botaoVerde, cartaSelecionada[0]])
        setCartaSelecionada([])}
    }
    
    

    return (
        <>
            <div className="screen-container">
                <div className="logo-container">
                    <img src="./img/logo.png"></img>
                    <h1>ZapRecall</h1>
                </div>
                <ListaDeCartas cartaSelecionada={cartaSelecionada} setCartaSelecionada={setCartaSelecionada} botaoVerde={botaoVerde} botaoLaranja={botaoLaranja} botaoVermelho={botaoVermelho}/>
                <BarraInferior concluidos={concluidos} alterarStatusVerde={alterarStatusVerde} alterarStatusLaranja={alterarStatusLaranja} alterarStatusVermelho={alterarStatusVermelho} />
            </div>

        </>)

    

}