import React, { useState, useEffect } from 'react';
import { useMovieSearch } from '../hooks/useMovieSearch';

const SearchBar = () => {
  const { searchMovies, loading } = useMovieSearch();
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(query);
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Buscar películas..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Buscando...' : 'Buscar'}
      </button>
    </form>
  );
};

export default SearchBar;