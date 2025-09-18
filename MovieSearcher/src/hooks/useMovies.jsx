import { useContext } from 'react';
import { MoviesContext } from '../contexts/MoviesContext';

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error('useMovies debe ser usado dentro de MoviesProvider');
  }
  return context;
};