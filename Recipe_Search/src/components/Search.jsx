import  { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    // console.log(e.keyCode)
    if (e.keyCode === 13) {          
        navigate (`/search/${query}`)        
      }
    setQuery(e.target.value);
  };


  return (
    <div className='search'>
 
      <input className='search-input'
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleInputChange}
        
      />
      <Link to={`/search/${query}`}>
      <button className='search-button'>Search</button>
      </Link>
    </div>
  );
};

export default Search; //test
