import React from 'react';

function MovieDetails(props) {
  return (
    <div>
        <span onclick={() => props.closeMovieDetails}> voltar </span>
        <h1>Movie Details</h1>
        {
          props.currentMovie && (
            <div>
              <h2>{props.currentMovie.title}</h2>
              <img src={`https://image.tmdb.org/t/p/w500${props.currentMovie.poster_path}`} alt={props.currentMovie.title} />
              <p>{props.currentMovie.overview}</p>
            </div>
          )
        }
        <p>{props.movie.title}</p>
    </div>
  );
}

export default MovieDetails;