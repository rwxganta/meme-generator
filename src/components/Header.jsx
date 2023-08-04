import React from 'react';
import memeImg from '../assets/troll-face.png';

export default function Header() {
    return (
        <header className='header'>
            <img className='header__img' src={memeImg} alt="" />
            <p className='header__title'>Meme Generator</p>
        </header>
    )
}