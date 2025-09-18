import React from 'react';
import { useMovies } from '../hooks/useMovies';

const GenreFilter = () => {
  const { state, setFilter } = useMovies(); // Asumiendo que has agregado un `setFilter` al contexto

  const genres = ['Sci-Fi', 'Thriller', 'Crime']; // Deberías obtener estos de tus datos

  const handleFilter = (genre) => {
    // Implementa la lógica de filtrado aquí
  };

  return (
    <div className="genre-filter">
      <button onClick={() => handleFilter('all')}>Todos</button>
      {genres.map(genre => (
        <button key={genre} onClick={() => handleFilter(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;