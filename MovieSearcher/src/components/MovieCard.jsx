import React from 'react';
import { useMovies } from '../hooks/useMovies';

const MovieCard = ({ movie, onShowDetails }) => {
  const { toggleFavorite, state } = useMovies();
  const isFavorite = state.favorites.some(fav => fav.id === movie.id);

  return (
    <div className="movie-card">
      <h3 onClick={() => onShowDetails(movie)}>{movie.title}</h3>
      <p>{movie.year}</p>
      <button onClick={() => toggleFavorite(movie)}>
        {isFavorite ? '❤️ Favorito' : '🤍 Añadir a favoritos'}
      </button>
    </div>
  );
};

export default MovieCard;