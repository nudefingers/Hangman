import React from 'react';

function Letter({ char, index }) {
    return (<span className={index}>{char}</span>)
}

export default Letter