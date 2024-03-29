import React from 'react';
import {Link} from 'react-router-dom'
import './PokemonCard.css';

const PokemonCard = ({name, image, id}) => {
    return (
        <div className= "item">
            <Link to={`/pokemon/${id}/${name}`}>
                <img src ={image} alt = {name} />
                <h2>{name}</h2>
            </Link>
        </div>
    );
 };

 export default PokemonCard;