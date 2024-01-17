import './PokemonPage.css';
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'

const PokemonPage = () => {
    const {id, name} = useParams();
    const upperName = name.charAt(0).toUpperCase() + name.slice(1)
    const [pokemon, setPokemon] = useState({
        name: '',
        weight: 0,
        height: 0,
        base_experience: 0,
        stats: [{ stat: { name: '', url: '' }, base_stat: 0 }],
        types: [{ type: { name: '', url: '' } }],
        abilities: [{ ability: { name: '', url: '' } }],
    });

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => {
            setPokemon({
                name: data.name,
                weight: data.weight,
                height: data.height,
                base_experience: data.base_experience,
                stats: data.stats,
                types: data.types,
                abilities: data.abilities,
            });
        });
    }, []);

    return (
        <div className = "PokePage">
            <div className = "App-header">
                <header>
                    <h1 className="App-header-title">About this Pokemon!</h1>
                </header>
            </div>
            <div className = "PokeInfo FlexContainer">
                <div className = "PokeImage">
                    <img src = {obtenerImagen(id)}/>
                </div>
                <div className= "PokemonData">
                    <p><b>Name: </b>{upperName}</p>
                    <p><b>Weight: </b>{pokemon.weight / 10} kg</p>
                    <p><b>Height: </b>{pokemon.height / 10} m</p>
                    <p><b>Base Experience: </b>{pokemon.base_experience}</p>
                    <p><b>Basic Stats:</b></p>
                    <ul>
                        {pokemon.stats.map((stat, index) => (
                            <li>{stat.stat.name} : {stat.base_stat}</li>
                        ))}
                    </ul>
                    <p><b>Types:</b></p>
                    <ul>
                        {pokemon.types.map((type, index) => (
                            <li>{type.type.name}</li>
                        ))}
                    </ul>
                    <p><b>Abilities:</b></p>
                    <ul>
                        {pokemon.abilities.map((ability, index) => (
                            <li>{ability.ability.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

    function obtenerImagen(id) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    }
};

export default PokemonPage;