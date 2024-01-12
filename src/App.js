import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import './Header';
import PokemonCard from './PokemonCard';

const App = () => {
 const [pokemons, setPokemons] = useState([]);
 const history = useHistory();

 const handleClick = (id) => {
    history.push(`/pokemon${id}`);
 }

 useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
     .then(response => response.json())
     .then(data => {setPokemons(data.results);
    })
 }, []);

 return (
      <div className = "container">
        {pokemons.map((pokemon) => (
            <Link to="#" onClick={() => handleClick(obtenerID(pokemon.url))}>
            <PokemonCard name = {pokemon.name} image ={obtenerImagen(pokemon.url)} />
            </Link>
        ))}
      </div>
    );

 function obtenerImagen(pokeURL){
    const id = obtenerID(pokeURL);
    const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return imagen;
 }

 function obtenerID(pokeURL){
     const id = pokeURL.split("/")[pokeURL.split("/").length - 2];
     return id;
  }
};

export default App;


