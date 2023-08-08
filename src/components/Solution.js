import React from 'react';
import Letter from './Letter';

function Solution({ solution, letterStatus }) {
    return (
        <div className='solution'>
            {solution.word.toUpperCase().split("").map((char, index) =>
                letterStatus[char]
                ? <Letter key={index} char={char} isUsed={true}/>
                : <Letter key={index} char="_" isUsed={true}/>
            )}
            <br /><br />
            <p className='solution-hint'>{solution.hint}</p>
        </div>
    )
}

export default Solution