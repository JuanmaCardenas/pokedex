import { useState, useEffect } from "react";
import Header from './Header';
import PokemonCard from './PokemonCard';
import './Pokemon.css';
import SearchBar from './SearchBar';
import {useParams} from 'react-router-dom';

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const [searchText, setSearchText] = useState('');
    const {id} = useParams();
    const genNumber = Number(id);

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
            <div className ="App" >
                <Header />
                <SearchBar onSearch= {handleSearch}/>
                {
                    <div className = "container">
                        {filteredPokemons.map((pokemon) => {
                            {return renderSwitch(pokemon);}
                        })}
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

      function renderSwitch(poke) {
        switch(genNumber){
            case 151:
                return <PokemonCard name = {poke.name} image ={obtenerImagen(poke.url)} id = {obtenerID(poke.url)} />;
            case 251:
                if(Number(obtenerID(poke.url)) >= 152 && Number(obtenerID(poke.url)) <= 251){
                    return <PokemonCard name = {poke.name} image ={obtenerImagen(poke.url)} id = {obtenerID(poke.url)} />;
                }
                break;
            case 386:
                if(Number(obtenerID(poke.url)) >= 252 && Number(obtenerID(poke.url)) <= 386){
                    return <PokemonCard name = {poke.name} image ={obtenerImagen(poke.url)} id = {obtenerID(poke.url)} />;
                }
                break;
            case 493:
                if(Number(obtenerID(poke.url)) >= 387 && Number(obtenerID(poke.url)) <= 493){
                    return <PokemonCard name = {poke.name} image ={obtenerImagen(poke.url)} id = {obtenerID(poke.url)} />;
                }
                break;
            case 649:
                if(Number(obtenerID(poke.url)) >= 494 && Number(obtenerID(poke.url)) <= 649){
                    return <PokemonCard name = {poke.name} image ={obtenerImagen(poke.url)} id = {obtenerID(poke.url)} />;
                }
                break;
            case 721:
                if(Number(obtenerID(poke.url)) >= 650 && Number(obtenerID(poke.url)) <= 721){
                    return <PokemonCard name = {poke.name} image ={obtenerImagen(poke.url)} id = {obtenerID(poke.url)} />;
                }
                break;
            case 809:
                if(Number(obtenerID(poke.url)) >= 722 && Number(obtenerID(poke.url)) <= 809){
                    return <PokemonCard name = {poke.name} image ={obtenerImagen(poke.url)} id = {obtenerID(poke.url)} />;
                }
                break;
            case 905:
                if(Number(obtenerID(poke.url)) >= 810 && Number(obtenerID(poke.url)) <= 905){
                    return <PokemonCard name = {poke.name} image ={obtenerImagen(poke.url)} id = {obtenerID(poke.url)} />;
                }
                break;
            case 1025:
                if(Number(obtenerID(poke.url)) >= 906 && Number(obtenerID(poke.url)) <= 1025){
                    return <PokemonCard name = {poke.name} image ={obtenerImagen(poke.url)} id = {obtenerID(poke.url)} />;
                }
                break;
            default : return <PokemonCard name = {poke.name} image ={obtenerImagen(poke.url)} id = {obtenerID(poke.url)} />;
        }
      }
};

export default Pokemon;