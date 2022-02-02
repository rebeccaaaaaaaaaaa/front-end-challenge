import React from 'react';
import Moment from 'react-moment';
import {SectionArea, DetaisList, DetaisAverageArea} from './style';
import { FaArrowLeft } from "react-icons/fa";


function MovieDetails(props) {
  return (
    <SectionArea>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12 pb-5">
            <FaArrowLeft onClick={props.closeMovieDetails} style={{cursor:'pointer'}}/>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="details-title">
              <h1> {props.currentMovie.title} </h1>
            </div>
            <div className="details-more">
              <DetaisList>
                <li>
                 
                  <Moment format="D MMM YYYY" withTitle>
                     {props.currentMovie.release_date}
                  </Moment>
                </li>
                <li> {props.currentMovie.popularity} </li>
                <li> {props.currentMovie.original_language} </li>
              </DetaisList>
            </div>
            <div className="details-description">
              <p>
                {
                  props.currentMovie.overview
                }
              </p>
              <DetaisAverageArea>
                <span> {props.currentMovie.vote_average} </span>
              </DetaisAverageArea>
            </div>
          </div>

          <div className="col-lg-5 col-sm-6">
            <img src={`https://image.tmdb.org/t/p/w500${props.currentMovie.poster_path}`} alt={props.currentMovie.name} className="img-fluid" width="300"/>
          </div>

        </div>
      </div>
    </SectionArea>
  );
  }


export default MovieDetails;