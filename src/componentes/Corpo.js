import React from "react";

export default function Corpo(){


    return (

        <section className="form--viagem">

         <label for="lugar"> Qual é o destino:</label>
        <input type="text" id="lugar" name="lugar"/><br/>

        <label for="status" >Você gostaria de ir sozinho ou acompanhado:</label>
        <input type="text" id="status" name="status"/><br/>

        <label for="data"> Qual é a data ideal: </label>
        <input type="text" id="data" name="data"/><br/>



        </section>
    )
}