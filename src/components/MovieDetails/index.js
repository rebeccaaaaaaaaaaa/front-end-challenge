import React from 'react';

function MovieDetails(props) {
  return (
    <div className="container">
     <div className="row">
     <div className="col-lg-6">
      <h1>{props.currentMovie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${props.currentMovie.poster_path}`} alt={props.currentMovie.title} />
      
      </div>
      <div className="col-lg-6">
      <p>{props.currentMovie.overview}</p>
      <p>{props.currentMovie.release_date}</p>
      <p>{props.currentMovie.vote_average}</p>
      </div>
     </div>
    </div>

  );
}

export default MovieDetails;