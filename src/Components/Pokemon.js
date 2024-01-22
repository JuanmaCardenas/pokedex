import { useState, useEffect } from "react";
import Header from './Header';
import PokemonCard from './PokemonCard';
import './Pokemon.css';
import SearchBar from './SearchBar';
import {useParams} from 'react-router-dom';
const numPokemon = 50;

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const [searchText, setSearchText] = useState('');
    const {limit, to} = useParams();
    const genNumber = Number(to);
    const [next, setNext] = useState(numPokemon);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${to}`)
         .then(response => response.json())
         .then(data => {setPokemons(data.results);
        })
    }, []);

    const handleSearch = (text) => {
        setSearchText(text);
    };

    const handleMorePokemon = () =>{
        setNext(next + numPokemon);
    }

    const filteredPokemons = pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchText.toLowerCase());
     });

     return (
            <div className ="App" >
                <Header />
                <SearchBar onSearch= {handleSearch}/>
                {
                    <div className = "container">
                        {filteredPokemons?.slice(0, next).map((pokemon) => {
                            return <PokemonCard name = {pokemon.name} image ={obtenerImagen(pokemon.url)} id = {obtenerID(pokemon.url)} />
                        })}
                        {next< filteredPokemons?.length && (
                            <button className= "boton" onClick = {handleMorePokemon}>Load More</button>
                        )}
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