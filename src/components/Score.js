import React from 'react';

function Score({ score }) {
    return <div className={
        score >= 80 ? "high-score"
            : score >= 50 ? "medium-score"
                : "low-score"
    }>{score}</div>
}

export default Score