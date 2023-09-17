import React, { useState } from 'react';
import '../App.css'; // Import your CSS file for styling

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Perform the search or any desired action with the search term
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search location..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="27" cy="27" r="8" stroke-width="3" fill="none" stroke="black" />

      <line x1="32" y1="32" x2="44" y2="44" stroke-width="3" stroke="red" />
      </svg>


      <button class="image-button"></button>
    </div>
  );
}

export default SearchBar;
