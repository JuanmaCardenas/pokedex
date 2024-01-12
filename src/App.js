import './App.css';
import Pokemon from './Pokemon.js'
import PokemonPage from './PokemonPage.js'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

const App = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element = {<Pokemon />}/>
                <Route exact path='/pokemon/:id' element = {<PokemonPage />} />
            </Routes>
        </Router>
    );
};

export default App;


