import React from 'react';

function EndGame({ word, isGuessed }) {
    return (
        isGuessed
            ? <div className='high-score'>You won!</div>
            : <div className='low-score'>You lose. hidden word - {word}</div>
    )
}

export default EndGame