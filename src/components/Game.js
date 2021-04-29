import React, { useState } from 'react';
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
        alertResult()
    }

    function handleFailure() {
        addCard([])
        setScore(0)
        changeAlertMessage(()=> "botch")
        alertResult()
    }

    function handleGame(cardName){
        if (!cardArray.includes(cardName)){
            handleSuccess(cardName)
        } else {
            handleFailure()
        }
    }

    function alertResult(){
        changeAlertStatus((prevState) => !prevState)
        setTimeout(function(){
            changeAlertStatus((prevState) => !prevState)
        }, 500)
    }

    return (
        <div>
            <h1 className="title">Memorize the Monster</h1>
            <Gameboard handleGame={handleGame}/>
            <div className="score">
                <h1>{score} Correct!</h1>
            </div>
            <Alert alertMessage={alertMessage} alertStatus={alertStatus}/>
        </div>
    )
}
export default Game;