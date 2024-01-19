import {useState} from "react";
import './SearchBar.css';

const SearchBar = ({onSearch}) => {
    const [searchText, setSearchText] = useState('');

    const handleChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchText);
    };

    return (
        <div className="search-container">
            <form className ="search-bar" onSubmit={handleSubmit}>
            <input type = "text" placeholder='Search...' value={searchText} onChange={handleChange}/>
            <button type ="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;