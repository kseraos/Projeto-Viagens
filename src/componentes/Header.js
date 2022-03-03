import React from 'react'
import Logo from './imgs/logo.jpg'

export default function Header(){
    return(
        <header className='header-header'>
            <img className='header-img' src={Logo}/>
            <h2 className='header-h2'> Olá, qual sua viagem dos sonhos?</h2>
        </header>
    );
}