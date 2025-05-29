const MovieDetails = ({ movies, selectedMovieId }) => {
    if (!selectedMovieId) {
      return <p>Виберіть фільм</p>;
    }
  
    const movie = movies.find(m => m.id === selectedMovieId);
  
    return (
      <div>
        <h3>Деталі фільму:</h3>
        <p><strong>Назва:</strong> {movie.title}</p>
        <p><strong>Рік:</strong> {movie.year}</p>
        <p><strong>Режисер:</strong> {movie.director}</p>
      </div>
    );
  };
  
  export default MovieDetails;