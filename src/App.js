import './App.css';
import Inicio from './Components/Inicio.js';
import Pokemon from './Components/Pokemon.js'
import PokemonPage from './Components/PokemonPage.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
    return(
        <Router>
            <Routes>
                <Route exact path='/' element = {<Inicio />}/>
                <Route exact path='/pokedex/:id' element = {<Pokemon />}/>
                <Route exact path='/pokemon/:id/:name' element = {<PokemonPage />} />
            </Routes>
        </Router>
    );
};

export default App;


