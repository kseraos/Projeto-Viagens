import React from "react";


export default function Comidas(props){


    return(
        <>
        <p>  Qual dessas comidas são mais interessantes: {props.um} {props.dois} {props.sushi} </p>
        <p>Qual pais tem a melhor comida : {props.melhor()}</p>
        </>
    )

}