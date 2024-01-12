import React from 'react';

const PokemonCard = ({name, image}) => {
    return (
        <div className= "item">
            <img src ={image} alt = {name} />
            <h2>{name}</h2>
        </div>
    );
 };

 export default PokemonCard;