import { useCallback, useEffect } from 'react';
import { useMovies } from './useMovies';
import { movieService } from '../services/movieService';

export const useMovieSearch = () => {
  const { state, setMovies, setLoading, setError, setSearchQuery } = useMovies();

  // Función de búsqueda con useCallback para memoizarla
  const searchMovies = useCallback(async (query) => {
    if (!query.trim()) {
      setMovies([]);
      return;
    }
    
    setLoading(true);
    setError(null);

    try {
      const results = await movieService.searchMovies(query);
      setMovies(results);
    } catch (error) {
      setError('Error al buscar películas. Inténtalo de nuevo.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, [setMovies, setLoading, setError]);

  return {
    ...state,
    searchMovies,
    setSearchQuery // Retornamos la función para actualizar el query
  };
};