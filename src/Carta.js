
import React from "react"
export default function Carta(props) {
 /*    return(<>
        <div className="pergunta-fechada">
            <p>pergunta 1</p>
            <img src="./img/seta_play.png"></img>
        </div>

    </>) */
     console.log(props)
    const [perguntas, setPerguntas] = React.useState(`Pergunta ${props.index + 1}`)
    const [classe, setClasse] = React.useState('pergunta-fechada')
    const [icone, setIcone] = React.useState("./img/seta_play.png")
    const [caixa, setCaixa] = React.useState(<>
        <div onClick={aparecerQuestao} className={classe}>
            <p>{perguntas}</p>
            <img src={icone}></img>
        </div>

    </>)
    return (<>{caixa}
    </>

    )


    function aparecerQuestao() {
        console.log('chmaou')
        setCaixa(<>
            <div className={"pergunta-aberta"}>
                <p>{props.carta.questão}</p>
                <img onClick={aparecerResposta} src={"./img/seta_virar.png"}></img>
            </div>

        </>)



    }
    function aparecerResposta() {
        setCaixa(
            <>
                <div className={"pergunta-aberta"}>
                    <p>{props.carta.resposta}</p>

                </div>

            </>
        )


    } 
   
}