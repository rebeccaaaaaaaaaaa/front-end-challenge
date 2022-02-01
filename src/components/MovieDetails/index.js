import React from 'react';

function MovieDetails(props) {
  return (
    <div>
        <span onclick={() => props.closeMovieDetails}> voltar </span>
        <h1>Movie Details</h1>
        <p>{props.movie.title}</p>
    </div>
  );
}

export default MovieDetails;