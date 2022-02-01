import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {PainelArea} from './style';

function Painel(){
    return (
      <PainelArea>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" alt="" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </PainelArea>
    );
}

export default Painel;