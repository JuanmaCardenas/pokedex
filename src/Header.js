import React from 'react';
import './Header.css';
import pokeball from './pokeball.png'

function Header() {
 return (
    <header className="App-header">
      <img src={pokeball} className="App-header-pokeball"/>
      <h1 className="App-header-title">POKEDEX!</h1>
      <img src={pokeball} className="App-header-pokeball"/>
    </header>
 );
}

export default Header