import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

export const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovies debe ser usado dentro de MoviesProvider');
  }
  return context;
};