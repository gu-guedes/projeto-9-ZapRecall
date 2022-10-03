import Carta from "./Carta";
import cartas from "./Deck"

export default function ListaDeCartas(props){
  console.log(props)
  return(
    <> {cartas.map((c, index) => (
    <Carta carta={c} index={index}/>
    ))}
   
    </>
  )
}