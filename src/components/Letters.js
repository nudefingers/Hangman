import React from 'react';
import Letter from './Letter';

function Letters({ chars, changeCharStatus }) {
    const onSelectLetter = function (_letter) {
        changeCharStatus(_letter)
    }

    return (
        <React.Fragment>
            <p>Avaliable letters:</p>
            <div className='letters'>
                {Object.keys(chars).map((char, index) => (
                    <Letter key={index} char={char} isUsed={chars[char]} onSelectLetter={onSelectLetter} />
                ))}
            </div>
        </React.Fragment>
    )
}

export default Letters