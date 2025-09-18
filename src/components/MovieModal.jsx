import React from 'react';

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="movie-modal-overlay" onClick={onClose}>
      <div className="movie-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>{movie.title} ({movie.year})</h2>
        <p>Género: {movie.genre}</p>
      </div>
    </div>
  );
};

export default MovieModal;