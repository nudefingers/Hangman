import './App.css';
import React, { useState, useEffect } from 'react';
import Letters from './components/Letters';
import Score from './components/Score';
import Solution from './components/Solution';

function App() {
    const word = "bomb".toUpperCase()
    const score = 50

    const [letterStatus, setLetterStatus] = useState(generateLetterStatuses())
    const [solutionProcess, setSolutionProcess] = useState(generateSolutionStatuses())
    const [decided, setDdecided] = useState(solutionProcess.map(item => item.status).every(status => status === true))

    useEffect(() => {
    }, [letterStatus, solutionProcess, decided])

    function generateLetterStatuses() {
        const _letterStatuses = {}
        for (let i = 65; i <= 90; i++) {
            const letter = String.fromCharCode(i)
            _letterStatuses[letter] = false
        }
        return _letterStatuses
    }

    function generateSolutionStatuses() {
        const _solutionStatuses = []
        for (const char of word) {
            _solutionStatuses.push({ char: char, status: false })
        }
        return _solutionStatuses
    }

    function changeLetterStatus(_letter) {
        setLetterStatus((prevLetterStatus) => {
            return {
                ...prevLetterStatus,
                [_letter]: true,
            }
        })

        setSolutionProcess((prevSolutionProcess) => {
            const updatedSolutionProcess = prevSolutionProcess.map(item => {
                if (item.char === _letter) {
                    return { ...item, status: true }
                }
                return item
            })
            setDdecided(updatedSolutionProcess.map(item => item.status).every(status => status === true))
            return updatedSolutionProcess
        })

        if (decided) {
            alert(`YOU WIN !`)
        }
    }

    return (
        <React.Fragment>
            <Score count={score} />
            <Solution solutionProcess={solutionProcess} />
            <Letters chars={letterStatus} changeCharStatus={changeLetterStatus} />
        </React.Fragment>
    )
}

export default App;
