import React from 'react';

function SearchBar({ searchValue, handleSearch }) {
  return (
    <div>
      <h3>
        search by name:
        <input value={searchValue} onChange={handleSearch} />
      </h3>
    </div>
  );
}

export default SearchBar;
