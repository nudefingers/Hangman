import './App.css';
import React, { useState, useEffect } from 'react';
import Letters from './components/Letters';
import Score from './components/Score';
import Solution from './components/Solution';
import EndGame from './components/EndGame';

function App() {
    const [letterStatus, setLetterStatus] = useState(generateLetterStatuses())
    const [solution, setSolution] = useState({ word: `bomb`, hint: `BAAAAM!` })
    const [score, setScore] = useState(100)

    function generateLetterStatuses() {
        const _letterStatuses = {}
        for (let i = 65; i <= 90; i++) {
            const letter = String.fromCharCode(i)
            _letterStatuses[letter] = false
        }
        return _letterStatuses
    }

    function selectLetter(_letter) {
        setLetterStatus((prevLetterStatus) => {
            return {
                ...prevLetterStatus,
                [_letter]: true,
            }
        })
        setScore(score + (solution.word.toUpperCase().includes(_letter) ? 5 : -20))
        console.log(win())
    }

    const win = () => [...solution.word.toUpperCase()].every(letter => letterStatus[letter])

    return (
        <React.Fragment>
            {(win() || (score <= 0)) 
            ? <EndGame isGuessed={win()} word={solution.word} />
            :<React.Fragment>
                <Score score={score} />
                <Solution solution={solution} letterStatus={letterStatus} />
                <Letters chars={letterStatus} changeCharStatus={selectLetter} />
            </React.Fragment>
            }
        </React.Fragment>
    )
}

export default App;
