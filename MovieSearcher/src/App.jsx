import React from 'react';
import { MoviesProvider } from './contexts/MoviesContext';
import SearchBar from './components/SearchBar';
import MovieGrid from './components/MovieGrid';
import './styles/MovieApp.css'; // Asegúrate de crear este archivo CSS

function App() {
  return (
    <MoviesProvider>
      <div className="movie-app-container">
        <h1>Buscador de Películas</h1>
        <SearchBar />
        <MovieGrid />
      </div>
    </MoviesProvider>
  );
}

export default App;