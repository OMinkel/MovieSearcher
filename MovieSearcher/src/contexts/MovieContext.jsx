import { createContext, useReducer } from 'react';

export const MovieContext = createContext();

const initialState = {
  movies: [],
  loading: false,
  error: null,
  searchQuery: '',
  favorites: [],
  filterGenre: 'all', // Nuevo estado
  selectedMovie: null, // Nuevo estado para el modal
};

const movieReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, movies: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'TOGGLE_FAVORITE':
      const movieToToggle = action.payload;
      const isFavorite = state.favorites.some(fav => fav.id === movieToToggle.id);
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter(fav => fav.id !== movieToToggle.id)
          : [...state.favorites, movieToToggle],
      };
    case 'SET_FILTER_GENRE':
      return { ...state, filterGenre: action.payload };
    case 'SET_SELECTED_MOVIE':
      return { ...state, selectedMovie: action.payload };
    default:
      return state;
  }
};

export const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  const setMovies = (movies) => dispatch({ type: 'SET_MOVIES', payload: movies });
  const setLoading = (loading) => dispatch({ type: 'SET_LOADING', payload: loading });
  const setError = (error) => dispatch({ type: 'SET_ERROR', payload: error });
  const setSearchQuery = (query) => dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
  const toggleFavorite = (movie) => dispatch({ type: 'TOGGLE_FAVORITE', payload: movie });
  const setFilterGenre = (genre) => dispatch({ type: 'SET_FILTER_GENRE', payload: genre });
  const setSelectedMovie = (movie) => dispatch({ type: 'SET_SELECTED_MOVIE', payload: movie });

  const value = {
    state,
    setMovies,
    setLoading,
    setError,
    setSearchQuery,
    toggleFavorite,
    setFilterGenre,
    setSelectedMovie,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};