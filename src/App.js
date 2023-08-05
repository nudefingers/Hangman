import './App.css';
import React from 'react';
import Letters from './components/Letters';
import Score from './components/Score';
import Solution from './components/Solution';

function App() {
    const word = "bomb"
    const score = 50
    const chars = ["a", "b", "c"]

    return (
        <React.Fragment>
            <Score count={score} />
            <Solution word={word} />
            <Letters chars={chars} />
        </React.Fragment>
    )
}

export default App;
