import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './SearchBox.css'; // Import the CSS file for styling

const SearchBox = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = () => {
    if (value.trim()) {
      // Navigate to search results page with query parameter
      navigate(`/search?query=${encodeURIComponent(value.trim())}`);
    }
  };

  return (
    <div className="searchbox-container">
      <div className="input-container">
        <input
          id="label_searchbox"
          type="text"
          className="typeahead tt-input"
          placeholder="Pick Your Arrangement..."
          autoComplete="off"
          spellCheck="false"
          dir="auto"
          value={value}
          onChange={handleChange}
        />
        <FaSearch className="search-icon" onClick={handleSearch} />
      </div>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBox;
