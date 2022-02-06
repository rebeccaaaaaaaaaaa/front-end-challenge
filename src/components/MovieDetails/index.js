import React, {useEffect} from 'react';
import Moment from 'react-moment';
import {SectionArea, DetaisList, DetaisAverageArea} from './style';
import { FaArrowLeft } from "react-icons/fa";


function MovieDetails(props) {

    useEffect(() => {
      console.log('component carregado')
    }, []);


  return (
    <SectionArea>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12 pb-5">
            <FaArrowLeft
              onClick={props.closeMovieDetails}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="details-title">
              <h1> {props.currentMovie.title} </h1>
            </div>
            <div className="details-more">
              <DetaisList>
                <li>
                  Data de lançamento: 
                  <Moment format="D MMM YYYY" withTitle>
                    {props.currentMovie.release_date}
                  </Moment>
                </li>
                <li> Idioma original: {props.currentMovie.original_language} </li>

                <li>
                  
                  <DetaisAverageArea>
                  <span> Média de votos: {props.currentMovie.vote_average} </span>
                </DetaisAverageArea>
                </li>
              </DetaisList>
            </div>
            <div className="details-description">
              <p>{props.currentMovie.overview}</p>
              
            </div>
          </div>

          <div className="col-lg-5 col-sm-12">
            <img
              src={`https://image.tmdb.org/t/p/w500${props.currentMovie.poster_path}`}
              alt={props.currentMovie.name}
              className="img-fluid"
              width="300"
            />
          </div>
        </div>
      </div>
    </SectionArea>
  );
  }


export default MovieDetails;