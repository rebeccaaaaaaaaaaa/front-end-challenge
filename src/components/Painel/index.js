import React from "react";
import Card from 'react-bootstrap/Card';
import {PainelArea, DetailsLink} from './style';
import Moment from 'react-moment';

function Painel(props){

  
    return (
      <PainelArea>
        <div className="container">
          <div className="row">
            {props.movies.map((movie, i) => (
              <div className="col-lg-2 col-md-3 col-sm-6 col-xs-6" 
                key={movie.id}
                viewMovieDetails={props.viewMovieDetails}
              >
                <Card className="my-3">
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.name}
                  />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>

                    <Moment format="D MMM YYYY" withTitle>
                      {movie.release_date}
                    </Moment>

                    <DetailsLink
                      onClick={() => props.viewMovieDetails(movie.id)}
                    >
                      Ver detalhes
                    </DetailsLink>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </PainelArea>
    );
}

export default Painel;