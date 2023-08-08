import React from 'react';
import Letter from './Letter';

function Letters({ chars, changeCharStatus}) {
    const onSelectLetter = function(_letter) {
        changeCharStatus(_letter)
    }

    return (<div className='letters'>
        <div>Avaliable letters:</div>
        {Object.keys(chars).map((char, index) => (
            <Letter key={index} char={char} isUsed={chars[char]} onSelectLetter={onSelectLetter} />
        ))}
    </div>)
}

export default Letters