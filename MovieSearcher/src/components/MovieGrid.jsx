import React from 'react';
import { useMovies } from '../hooks/useMovies';
import MovieCard from './MovieCard';

const MovieGrid = () => {
  const { state } = useMovies();
  const { movies, loading, error, searchQuery } = state;

  if (loading) {
    return <p className="loading-message">Cargando películas...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (searchQuery && movies.length === 0) {
    return <p className="no-results">No se encontraron películas para "{searchQuery}".</p>;
  }

  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;