import React from 'react';
import { useMovies } from '../hooks/useMovies';

const GenreFilter = () => {
  const { state, setFilterGenre } = useMovies();
  const genres = ['Sci-Fi', 'Thriller', 'Crime'];

  return (
    <div className="genre-filter">
      <button
        onClick={() => setFilterGenre('all')}
        className={state.filterGenre === 'all' ? 'active' : ''}
      >
        Todos
      </button>
      {genres.map(genre => (
        <button
          key={genre}
          onClick={() => setFilterGenre(genre)}
          className={state.filterGenre === genre ? 'active' : ''}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;