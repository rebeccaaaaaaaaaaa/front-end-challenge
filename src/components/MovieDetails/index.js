import React from 'react';
import {DetailsTitle, DetailsText} from './style';
import Moment from 'react-moment';

function MovieDetails(props) {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-4 col-md-12">
        <div class="card">
        <img
            src={`https://image.tmdb.org/t/p/w500${props.currentMovie.poster_path}`}
            alt={props.currentMovie.title}
          />
          <div class="card-body">
            <h5 class="card-title">{props.currentMovie.title}</h5>
            <p>
            {" "}
            Data de lançamento:
            <Moment format="D MMM YYYY" withTitle>
              {props.currentMovie.release_date}
            </Moment>
          </p>
          <p> Classificação: {props.currentMovie.vote_average}</p>
          <p> Idioma original: {props.currentMovie.original_language}</p>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default MovieDetails;