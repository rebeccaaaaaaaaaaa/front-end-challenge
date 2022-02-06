import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Filter from "./components/Filters";
import Painel from "./components/Painel";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import MovieDetails from "./components/MovieDetails";

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      selectedValue: props.selectedValue,
      genres: [],
      searchMovie: "",
      totalMovies: 0,
      currentPage: 1,
      currentMovie: null
    };

    // minha chave da api que está dento do .env na raiz do projeto, credenciais de acesso tipo essa
    // é interessante colocar essa chave em um arquivo .env, pois ela é muito grande e não é muito seguro colocar em um arquivo js
    // ou qualquer outro lugar, por isso coloquei em um arquivo .env
    this.apiKey = process.env.REACT_APP_API_KEY;

    console.log(this.selectedValue);
  }

  // pegar o valor do e.target.value do componente PAINEL e salvar aqui em uma variavel

  // ao dar enter no botão de busca, vai realizar a requisão para a API - coloquei no fim da busca para não vir conteúdo adulto
  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=pt-BR&query=${this.state.searchMovie}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({movies: [...data.results], totalMovies: data.total_results});
    });
  }

  // função para acompanha a mudança no input de busca no painel para
  // atualizar o state com o valor digitado

  handleChange = (e) => {
    this.setState({searchMovie: e.target.value});
  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=pt-BR&query=${this.state.searchMovie}&page=${pageNumber}&include_adult=false`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({movies: [...data.results], currentPage: pageNumber})
    });
  }

  viewMovieDetails = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id)
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
    this.setState({currentMovie: newCurrentMovie})
    console.log(newCurrentMovie)
    
  }

popularMovies = (e) => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=pt-BR&page=1`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({movies: [...data.results]});
    });

    e.preventDefault();
  }

  showMoviesGenres = (selectedValue) => {
    fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${selectedValue}&language=pt-BR&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ movies: [...data.results] });
      });

      console.log("o id selecionado é:" , selectedValue);
     
  };


  // fechar o detalhe do file pegando o filme atual l e setando  como nulo
  // setando como nulo significa que é para mostrar o painel - lista de filmes
  closeMovieDetails = () => {
    this.setState({currentMovie: null});
  }

  render() {
    const numberPages = Math.floor(this.state.totalMovies / 20);

    return (
      <>

        <Navbar />
        <main>
          <Header />
          <Filter popularMovies={this.popularMovies} 
                  movies={this.state.movies} 
                  genres={this.state.genres} 
                  showMoviesGenres={this.showMoviesGenres}
                  viewMovieDetails={this.viewMovieDetails}/>
          
          { this.state.currentMovie === null ? 
             // verificação se o filme atual é nulo se for mostra o search, pagination e painel, se n for nulo quer
             //  dizer que está sendo exibido o detalhe do filme

           <>
              <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
              <Painel movies={this.state.movies} viewMovieDetails={this.viewMovieDetails} />
            </>
            : 
              <MovieDetails closeMovieDetails={this.closeMovieDetails} currentMovie={this.state.currentMovie} />
            } 
          
         
          {
             // paginação em baixo da listagem dos filter
            this.state.totalMovies > 20 && this.state.currentMovie == null ?
            <Pagination pages={numberPages} nextPage={this.nextPage}  currentPage={this.state.currentPage}/> : ''
          }
        </main>
      </>
    );
  }
}

export default App;
