import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {PainelArea, DetailsLink} from './style';
import Moment from 'react-moment';

function Painel(props){
    return (
      <PainelArea>
        <Container>
          <Row>
            {props.movies.map((movie) => (
              <Col xs={6} md={4} lg={3} key={movie.id} >
                <Card className="my-3">
                  <Card.Img variant="top" 
                        src={
                          `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        } alt="" />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                   
                      <Moment format="D MMM YYYY" withTitle>
                        {movie.release_date}
                       </Moment>
                   
                      <DetailsLink href=""> Ver detalhes </DetailsLink>
                  </Card.Body>
                </Card>
              </Col>
              

            ))}
          </Row>
        </Container>
      </PainelArea>
    );
}

export default Painel;