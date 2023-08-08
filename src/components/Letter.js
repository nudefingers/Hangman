import React from 'react';

function Letter({ char, isUsed, onSelectLetter }) {
    function handleClick(event) {
        const _letter = event.target.innerHTML
        onSelectLetter(_letter)
    }
    
    return (<span className={isUsed ? undefined : 'clickable'}
        onClick={isUsed ? null : handleClick}>
        {char}
    </span>)
}

export default Letter