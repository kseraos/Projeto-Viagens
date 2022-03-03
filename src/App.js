import React, {useState} from "react";
import Header from "./componentes/Header";
import Corpo from "./componentes/Corpo";
import Dados from "./componentes/Dados";
import Comidas from "./componentes/Comidas";
import Fotos from "./componentes/Fotos";
import './App.css';
import Led from './componentes/Led'

export default function App(){
  const transporte ="Carro";
  const local ='Praia';
  const sushi = "Sushi";

  const comida = () => {

    return 'Italia'
}
  const [num, setNum] = useState(20)

  return(


    <div>

    <Header/>


    <Corpo/>


    <Dados transporte =  {transporte} local = {local}/>



    <Comidas um = "Pizza" dois="Massas" sushi={sushi} melhor={comida} />

    <Fotos/>

    <p>Clique no botão e veja o desconto: {num}</p>
    <button onClick={()=>setNum(num+5)}>Aqui</button>
    <Led/>
    </div>



  )
}

