import React from "react";


export default function Dados(props){


    return(

        <section>

            <p> Qual transporte ideal: {props.transporte}  </p>
            <p> Prefere campo ou praia: {props.local} </p>


        </section>
    )
}