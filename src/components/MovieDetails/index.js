import React from 'react';
import Moment from 'react-moment';
import {SectionArea} from './style';
import { FaArrowLeft } from "react-icons/fa";


function MovieDetails(props) {
  return (
    <SectionArea>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12 pb-5">
            <FaArrowLeft onClick={props.closeMovieDetails} style={{cursor:'pointer'}}/>
          </div>
          <div className="offset-1 col-lg-6">
            <div className="details-title">
              <h1> {props.currentMovie.title} </h1>
            </div>
            <div className="details-more">
              <ul>
                <li>
                  Data de lançamento: 
                  <Moment format="D MMM YYYY" withTitle>
                     {props.currentMovie.release_date}
                  </Moment>
                </li>
                <li> Classificação: {props.currentMovie.vote_average} </li>
                <li> Duração: {props.currentMovie.popularity} </li>
                <li> Idioma original: {props.currentMovie.original_language} </li>
              </ul>
            </div>
            <div className="details-description">
              <p>
                {
                  props.currentMovie.overview
                }
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <img src={`https://image.tmdb.org/t/p/w500${props.currentMovie.poster_path}`} alt={props.currentMovie.name} className="img-fluid" width="300"/>
          </div>

        </div>
      </div>
    </SectionArea>
  );
  }


export default MovieDetails;