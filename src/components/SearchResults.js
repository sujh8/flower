import React from 'react';
import { useLocation } from 'react-router-dom';


const SearchResults = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query');

  return (
    <div className="search-results-container">
      <h1>Search Results</h1>
      <p>Showing results for: <strong>{query}</strong></p>
      {/* You can add code here to display the actual search results */}
    </div>
  );
};

export default SearchResults;
