import React, { useState, useEffect } from 'react';
import Gameboard from './Gameboard'
import Alert from './Alert'

function Game(){
    const [score, setScore] = useState(0)
    const [cardArray, addCard] = useState([])
    const [alertMessage, changeAlertMessage] = useState("")
    const [alertStatus, changeAlertStatus] = useState(false)
    
    function handleSuccess(cardName) {
        addCard((prevArray) => [...prevArray, cardName])
        setScore((prevScore) => prevScore + 1)
        changeAlertMessage(()=> "critical")
    }

    function handleFailure() {
        addCard([])
        setScore(0)
        changeAlertMessage(()=> "botch")
    }

    function handleGame(cardName){
        if (!cardArray.includes(cardName)){
            handleSuccess(cardName)
        } else {
            handleFailure()
        }
    }

    useEffect(()=> {
        changeAlertStatus((prevState) => !prevState)
        setTimeout(function(){
            changeAlertStatus((prevState) => !prevState)

        }, 500)
    }, [cardArray])

    return (
        <div>
            <h1 className="title">Memorize the Monster</h1>
            <p className="title subtitle">Don't choose the same monster twice</p>
            <Gameboard handleGame={handleGame}/>
            <div className="score">
                <h1>{score} Correct!</h1>
                <br/>
            </div>
            <Alert alertMessage={alertMessage} alertStatus={alertStatus}/>
        </div>
    )
}
export default Game;