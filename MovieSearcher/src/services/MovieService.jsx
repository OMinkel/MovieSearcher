export const movieService = {
  searchMovies: (query) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const allMovies = [
          { id: 1, title: 'Inception', year: 2010, genre: 'Sci-Fi' },
          { id: 2, title: 'The Matrix', year: 1999, genre: 'Sci-Fi' },
          { id: 3, title: 'Parasite', year: 2019, genre: 'Thriller' },
          { id: 4, title: 'Interstellar', year: 2014, genre: 'Sci-Fi' },
          { id: 5, title: 'Pulp Fiction', year: 1994, genre: 'Crime' },
        ];

        const filteredMovies = allMovies.filter(movie => 
          movie.title.toLowerCase().includes(query.toLowerCase())
        );
        
        if (filteredMovies.length > 0) {
          resolve(filteredMovies);
        } else {
          resolve([]);
        }
      }, 500);
    });
  }
};