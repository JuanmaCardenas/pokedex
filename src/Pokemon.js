import { useState, useEffect } from "react";
import Header from './Header';
import PokemonCard from './PokemonCard';
import './Pokemon.css';
import SearchBar from './SearchBar'
import {useParams} from 'react-router-dom'

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const [searchText, setSearchText] = useState('');
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${id}`)
         .then(response => response.json())
         .then(data => {setPokemons(data.results);
        })
    }, []);

    const handleSearch = (text) => {
        setSearchText(text);
    };

    const filteredPokemons = pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchText.toLowerCase());
     });

     return (
            <div className ="App">
                <Header />
                <SearchBar onSearch= {handleSearch}/>
                {
                    <div className = "container">
                        {filteredPokemons.map((pokemon) => (
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