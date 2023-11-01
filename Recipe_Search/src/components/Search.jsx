import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    console.log(e.keyCode)
    if (e.keyCode === 13) {     
        console.log('inside')
        // return(<Link to={`/search/${query}`}></Link>)
        window.location.href = `/search/${query}`
      }
    setQuery(e.target.value);
  };


  return (
    <div>
 
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleInputChange}
        
      />
      <Link to={`/search/${query}`}>
      <button >Search</button>
      </Link>
    </div>
  );
};

export default Search;
