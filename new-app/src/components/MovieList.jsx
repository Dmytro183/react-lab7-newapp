import React, { useState } from 'react';
import MovieDetails from './MovieDetails';

const MovieList = ({ movies }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleSelectMovie = (id) => {
    setSelectedMovieId(id);
  };

  return (
    <div>
      <h2>Список фільмів:</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id} onClick={() => handleSelectMovie(movie.id)}>
            {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
      <MovieDetails movies={movies} selectedMovieId={selectedMovieId} />
    </div>
  );
};

export default MovieList;