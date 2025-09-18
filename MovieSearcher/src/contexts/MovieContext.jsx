import { createContext, useReducer } from 'react';

export const MovieContext = createContext();

const initialState = {
  movies: [],
  loading: false,
  error: null,
  searchQuery: '',
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

  const value = { state, setMovies, setLoading, setError, setSearchQuery };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};