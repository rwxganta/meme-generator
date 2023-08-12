import React, { useState } from 'react';
import memesData from '../assets/memesData.js'

export default function Meme() {
    //const [meme, setMeme] = useState('');
    const [allMemesData, setAllMemesData] = useState(memesData);
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
    });


    function getMemeImage() {
        const memesArr = allMemesData.data.memes;
        const random = Math.floor(Math.random() * memesArr.length);
        const link = memesArr[random].url;
        setMeme((prevState) => {
            return {
                ...prevState,
                randomImage: link,
            }
        });
    }

    return (
        <>
            <form action="#">
                <div className="input-group">
                    <input type="text" placeholder='Type upper text' />
                    <input type="text" placeholder='Type lower text' />
                </div>
                <button type='button' onClick={getMemeImage}>Get a new meme image</button>
            </form>
            <img className='meme-image' src={meme.randomImage} alt="" />
        </>
    )
}