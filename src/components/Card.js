import React from 'react';

function Card(props){

    const {
        card: {name, src},
        handleGame
     } = props

    return (
        <button className="card" onClick={handleGame.bind(this, name)} data-image={src}>
            <img src={src} alt=""></img>
            <h2>{name}</h2>
        </button>
    )
}
export default Card;