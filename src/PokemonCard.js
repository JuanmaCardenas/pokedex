import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';

const PokemonCard = ({name, image, id}) => {
    return (
        <div className= "item">
            <Link to={`/pokemon/${id}`}>
                <img src ={image} alt = {name} />
                <h2>{name}</h2>
            </Link>
        </div>
    );
 };

 export default PokemonCard;