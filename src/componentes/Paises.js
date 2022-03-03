import React from "react";


export default function Paises(props){

    const n1 = 10
    const n2 = 9

    return(
        <>
        <span>Qual país seria sua segunda opção:  </span>
        <select>
            <option> França </option>
            <option> México </option>
            <option> Reino Unido </option>
            <option> Itália </option>
            <option> Turquia </option>
        </select>
        <p>Quantas fotos tirar por dia: {props.valor(n1,n2)}</p>
        </>
    )
}