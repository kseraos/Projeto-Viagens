import React, { useState } from 'react';
import On from './imgs/on.png'
import Off from './imgs/off.png'



export default function Led(){

    const [ligado, setLigado] = useState(false)
    const [nome, setNome] = useState('Kristine')
    return(

        <>
        <p> é: {nome}</p>
        <button onClick={()=>setNome()}>aqui</button>
        <img style={{width:'50px'}} src={ligado?On:Off}/>

        <button onClick={()=>setLigado(!ligado)}>{ligado?'Desligar' :'Ligar'}</button>
        </>
    );

}