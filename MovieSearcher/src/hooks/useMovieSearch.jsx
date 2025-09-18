import { useContext, useCallback } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import { movieService } from '../services/movieService';

export const useMovieSearch = () => {
  const { state, setMovies, setLoading, setError, setSearchQuery } = useContext(MovieContext);

  const searchMovies = useCallback(async (query) => {
    if (!query.trim()) {
      setMovies([]);
      setSearchQuery('');
      return;
    }
    
    setLoading(true);
    setError(null);
    setSearchQuery(query);

    try {
      const results = await movieService.searchMovies(query);
      setMovies(results);
    } catch (error) {
      setError('Error al buscar películas. Inténtalo de nuevo.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, [setMovies, setLoading, setError, setSearchQuery]);

  return {
    ...state,
    searchMovies,
  };
};