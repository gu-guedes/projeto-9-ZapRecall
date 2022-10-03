import BarraInferior from "./BarraInferior"
import ListaDeCartas from "./ListaDeCartas"
import React from "react"
export default function TelaDoJogo() {


    return (
        <>
            <div className="screen-container">
                <div className="logo-container">
                    <img src="./img/logo.png"></img>
                    <h1>ZapRecall</h1>
                </div>
                <ListaDeCartas />
                <BarraInferior alterarStatus={alterarStatus} />
            </div>

        </>)


    function alterarStatus() {
        console.log('chamou')
    }

}