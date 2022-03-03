import React, { useState } from 'react';
import On from './imgs/on.png'
import Off from './imgs/off.png'



export default function Led(){

    const [ligado, setLigado] = useState(false)
    return(

        <>
        <img style={{width:'50px'}} src={ligado?On:Off}/>

        <button onClick={()=>setLigado(!ligado)}>{ligado?'Desligar' :'Ligar'}</button>
        </>
    );

}