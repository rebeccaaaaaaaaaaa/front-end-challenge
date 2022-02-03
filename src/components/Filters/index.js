import React, {useEffect, useState} from 'react';
import {FilterArea, FilterSectionTitle, FilterSectionFilters, DropdownArea} from './style';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';

function Filter(props) {

    const [genres, setGenres] = useState([]);

    useEffect = (() => {
      loadGenres();
    })

    const loadGenres = (() => {
      fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setGenres(data.genres);
        });
    })

    /* 
      fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setGenres(data.genres);
        });
    */
    
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
                {/*
                  props.genres.map(genre => (
                    <Dropdown.Item key={genre.id} onClick={}>{genre.name}</Dropdown.Item>
                  ))
                  */}
              </Dropdown.Menu>
            </DropdownArea>
          </FilterSectionFilters>
        </Container>
      </FilterArea>
    );
}

export default Filter;