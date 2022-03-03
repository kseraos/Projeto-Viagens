import React from "react";
import Paises from "./Paises";

export default function Fotos(){
    const somar = (v1,v2) => {
        return v1+v2
      }

    return(

        <>
        <p>Você gosta de tirar fotos?</p>
        <input type="radio" id="sempre" name="fotos"/>
        <label for="sempre">Sempre</label>
        <input type="radio" id="nunca" name="fotos"/>
        <label for="nunca">Sempre</label>
        <input type="radio" id="asvezes" name="fotos"/>
        <label for="asvezess">Sempre</label>
        <br/>

        <Paises
            valor = {somar}
        />
        </>
    )
}