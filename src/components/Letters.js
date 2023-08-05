import React from 'react';
import Letter from './Letter';

function Letters({ chars }) {
    return (<div className='letters'>
        <div>Avaliable letters:</div>
        {chars.map((char, index) => (
            <Letter char={char} key={index}/>
        ))}
    </div>)
}

export default Letters