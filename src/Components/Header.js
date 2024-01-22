import React from 'react';
import './Header.css';
import pokeball from '../pokeball.png'
import {Link} from "react-router-dom"

function Header() {
 return (
    <header className="App-header">
      
      <img src={pokeball} className="App-header-pokeball"/>
      <Link to = {"/"}>
      <h1 className="App-header-title">POKEDEX!</h1>
      </Link>
      <img src={pokeball} className="App-header-pokeball"/>
    </header>
 );
}

export default Header