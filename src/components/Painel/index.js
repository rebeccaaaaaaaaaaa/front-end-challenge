import React from "react";
import Card from 'react-bootstrap/Card';
import {PainelArea, MovieCard} from './style';


function Painel(props){

  
    return (
      <PainelArea>
        <div className="container">
          <div className="row">
            {props.movies.map((movie, i) => (
              <div className="col-6 col-lg-2 col-md-4" 
                key={movie.id}
                viewMovieDetails={props.viewMovieDetails}
              >
               <MovieCard onClick={() => props.viewMovieDetails(movie.id)}>
               <Card className="my-3">
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.name}
                    title={movie.name}
                  />
                </Card>
               </MovieCard>
              </div>
            ))}
          </div>
        </div>
      </PainelArea>
    );
}

export default Painel;