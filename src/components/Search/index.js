import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import {SearchArea, IconButton} from './style';


function Search(props) {
  return (
    <SearchArea>
      <Container>
        <form action="" onSubmit={props.handleSubmit}>
            <InputGroup className="mb-3">
            <FormControl
                placeholder="Buscar filme"
                aria-label="Buscar filme"
                aria-describedby="movie-search"
                onChange={props.handleChange}
            />
            <InputGroup.Text id="basic-addon1"><IconButton/></InputGroup.Text>
            </InputGroup>
        </form>
      </Container>
    </SearchArea>
  );
}

export default Search;