import React from 'react';
import { useMovies } from '../hooks/useMovies';
import MovieCard from './MovieCard';

const MovieGrid = () => {
  const { state, setSelectedMovie } = useMovies();
  const { movies, loading, error, searchQuery, filterGenre } = state;

  const filteredMovies = movies.filter(movie =>
    filterGenre === 'all' || movie.genre === filterGenre
  );

  if (loading) {
    return <p className="loading-message">Cargando películas...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (searchQuery && filteredMovies.length === 0) {
    return <p className="no-results">No se encontraron películas para "{searchQuery}".</p>;
  }

  return (
    <div className="movie-grid">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onClick={() => setSelectedMovie(movie)} />
      ))}
    </div>
  );
};

export default MovieGrid;