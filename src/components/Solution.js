import React from 'react';

function Solution({ word }) {
    return (<div className='solution'>
        {word.split("").map((char, index) => (
            <span char={char} key={index}>_</span>
        ))}
    </div>)
}

export default Solution