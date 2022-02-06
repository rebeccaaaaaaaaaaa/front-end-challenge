import React, { useEffect, useState } from "react";
import {
  FilterArea,
  FilterSectionTitle,
  FilterSectionFilters,
  Dropdown,
} from "./style";
import Container from "react-bootstrap/Container";


const Filter = props => {
  const [genres, setGenres] = useState([]);

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    props.showMoviesGenres(selectedValue);
    console.log(selectedValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`
      );
      const data = await response.json();
      setGenres(data.genres);
    };

    fetchData();
  }, []);

  return (
    <FilterArea>
      <Container>
        <FilterSectionFilters>
          <button
            style={{ marginRight: "15px" }}
            className="btn btn-primary"
            onClick={props.popularMovies}
          >
            OS MAIS POPULARES
          </button>
          <FilterSectionTitle> OU </FilterSectionTitle>
          <Dropdown onChange={handleChange}>
            <option value="0">Filtrar por gênero</option>
            {genres.map((genre) => (
              <option
                key={genre.id}
                value={genre.id}
                onChange={handleChange}

              >
                {genre.name}
              </option>
            ))}
          </Dropdown>
        </FilterSectionFilters>
      </Container>
    </FilterArea>
  );
}

export default Filter;
