import React from 'react';
import {FilterArea, FilterSectionTitle, FilterSectionFilters, DropdownArea} from './style';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';

function Filter(props) {
    return (
      <FilterArea>
        <Container>
          <FilterSectionFilters>
            <FilterSectionTitle>FILTRE POR:</FilterSectionTitle>
            <DropdownArea>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                ESCOLHA UM GÊNERO
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={props.popularMovies}> Populares </Dropdown.Item>
                <Dropdown.Item > Ação </Dropdown.Item>
                <Dropdown.Item > Aventura </Dropdown.Item>
                <Dropdown.Item > Comédia </Dropdown.Item>
                <Dropdown.Item > Drama </Dropdown.Item>
                <Dropdown.Item > Ficção Científica </Dropdown.Item>
                <Dropdown.Item > Suspense </Dropdown.Item>
                
              </Dropdown.Menu>
            </DropdownArea>
          </FilterSectionFilters>
        </Container>
      </FilterArea>
    );
}

export default Filter;