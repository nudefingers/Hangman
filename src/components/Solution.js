import React from 'react';

function Solution({ solutionProcess }) {
    return (
        <div className='solution'>
            {solutionProcess.map(({ char, status }, index) => (
                <span className='solution-char' key={index}>
                    {status ? char : "_"}
                </span>
            ))}
        </div>
    )
}

export default Solution