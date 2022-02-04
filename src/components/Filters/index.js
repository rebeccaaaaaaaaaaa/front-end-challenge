import React, {useEffect, useState} from 'react';
import {FilterArea, FilterSectionTitle, FilterSectionFilters, DropdownArea} from './style';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';

function Filter(props) {

    const [genres, setGenres] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`);
        const data = await response.json();
        setGenres(data.genres);
      }

      fetchData();
      console.log(genres);


    }, []);

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
                  genres.map(genre => (
                    <Dropdown.Item key={genre.id} onClick={props.shoMoviesGenres}>{genre.name}</Dropdown.Item>
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