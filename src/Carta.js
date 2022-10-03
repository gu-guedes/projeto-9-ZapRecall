
import React from "react"
export default function Carta(props) {

    console.log(props)
    const [perguntas, setPerguntas] = React.useState(`Pergunta ${props.index + 1}`)
    const [classe, setClasse] = React.useState('pergunta-fechada')
    const [icone, setIcone] = React.useState("./img/seta_play.png")

    return (
        <>
            <div onClick={aparecerQuestao} className={classe}>
                <p>{perguntas}</p>
                <img src={icone}></img>
            </div>
        </>

    )


    function aparecerQuestao() {
        if (classe === 'pergunta-fechada') {
            setClasse('pergunta-aberta')
            setIcone("./img/seta_virar.png")
            setPerguntas(props.carta.questão)
        } else {
            setPerguntas(props.carta.resposta)
        }

    }

}