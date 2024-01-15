import { useState, useEffect } from "react";
import Header from './Header';
import PokemonCard from './PokemonCard';
import PokemonPage from './PokemonPage';
import './App.css';


const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);

     useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=800')
         .then(response => response.json())
         .then(data => {setPokemons(data.results);
        })
     }, []);

     return (
            <div className ="App">
                <Header />
                {
                    <div className = "container">
                        {pokemons.map((pokemon) => (
                            <PokemonCard name = {pokemon.name} image ={obtenerImagen(pokemon.url)} id = {obtenerID(pokemon.url)} />
                        ))}
                    </div>
                }
            </div>
     );

     function obtenerImagen(pokeURL){
        const id = obtenerID(pokeURL);
        const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return imagen;
     };

     function obtenerID(pokeURL){
         const id = pokeURL.split("/")[pokeURL.split("/").length - 2];
         return id;
      }
};

export default Pokemon;