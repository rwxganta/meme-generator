import React from 'react';

export default function Meme() {
    return (
        <form action="#">
            <div className="input-group">
                <input type="text" placeholder='Type upper text' />
                <input type="text" placeholder='Type lower text' />
            </div>
            <button type='button'>Get a new meme image</button>
        </form>
    )
}