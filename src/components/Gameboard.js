import React from 'react'
import Card from './Card'
import Images from './Images'

function Gameboard(props){

    const {handleGame} = props

    //Source: https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
    function getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }


    return (
        <div className="gameboard">         
            {getRandom(Images, 6).map((card)=>
                <Card key={card.name} card={card} handleGame={handleGame}/>
            )}
        </div>
    )
}
export default Gameboard;