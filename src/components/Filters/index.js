import React from 'react';
import {FilterArea, FilterSectionTitle, FilterSectionFilters, DropdownArea} from './style';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';

function Filter(props) {
    return (
      <FilterArea>
        <Container>
          <FilterSectionFilters>
            <button style={{marginRight: '15px'}} className="btn btn-primary" onClick={props.popularMovies}> OS MAIS POPULARES </button>
            <FilterSectionTitle> OU </FilterSectionTitle>
            <DropdownArea>
              <Dropdown.Toggle variant="success" id="dropdown-basic" >
                ESCOLHA UM GÊNERO
              </Dropdown.Toggle>
              <Dropdown.Menu >
                {
                  props.genres.map((genre, i) => (
                    <Dropdown.Item key={genre.id} onClick={() => props.genderMovies(genre.id)}>
                      {genre.name}
                      {console.log(genre.name)}
                    </Dropdown.Item>
                  ))
                }
              </Dropdown.Menu>
            </DropdownArea>
          </FilterSectionFilters>
        </Container>
      </FilterArea>
    );
}

export default Filter;