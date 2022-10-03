/* import verde from "../img/icone_certo.png"
import laranja from "./img/icone_quase.png"
import vermelho from "./img/icone_erro.png" */
import React from "react"

export default function Carta(props) {
    const [classe, setClasse] = React.useState('pergunta-fechada')
    const [icone, setIcone] = React.useState("./img/seta_play.png")
    const [perguntaFechada, setPerguntaFechada] = React.useState(true)
    const [resposta, setResposta] = React.useState(false)



    /*   console.log(props)
      const [perguntas, setPerguntas] = React.useState(`Pergunta ${props.index + 1}`)
      const [classe, setClasse] = React.useState('pergunta-fechada')
      const [icone, setIcone] = React.useState("./img/seta_play.png") */

    return (
        <>
            {

                props.cartaSelecionada.includes(props.index) ?

                    <div onClick={() => {
                        setResposta(true)
                        console.log('chamou')

                    }} className="pergunta-aberta">
                        <p>{resposta ? props.carta.resposta : props.carta.questão}</p>
                        <img src={resposta ? "" : "./img/seta_virar.png"}></img>

                    </div> :
                    <div className={classe /* + props.naoLembrei ? " pergunta-nao-lembrei" : ""  */}>
                        <p>{`Pergunta ${props.index + 1}`}</p>
                        { props.botaoVerde.includes(props.index) ?
                        <img src="./img/icone_certo.png"/> : 
                        props.botaoLaranja.includes(props.index) ?
                        <img src="./img/icone_quase.png"/> :
                        props.botaoVermelho.includes(props.index) ?
                        <img src="./img/icone_erro.png"/> :
                        <img onClick={() => {
                            console.log('chamou')
                            setPerguntaFechada(false)
                            props.setCartaSelecionada([props.index])

                        }} src={icone}></img>}
                    </div>
                    


            }
        </>

    )




}