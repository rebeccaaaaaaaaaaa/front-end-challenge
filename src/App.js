import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Filter from "./components/Filters";
import Painel from "./components/Painel";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import MovieDetails from "./components/MovieDetails";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchMovie: "",
      totalMovies: 0,
      currentPage: 1,
      currentMovie: null
    };
    this.apiKey = process.env.REACT_APP_API_KEY;

  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=pt-BR&query=${this.state.searchMovie}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({movies: [...data.results], totalMovies: data.total_results})
    });
  }

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
    const filteredMovie = this.state.movies.filter(movie => movie.id === id);

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
    this.setState({currentMovie: filteredMovie});
    
  }

  closeMovieDetails = () => {
    this.setState({currentMovie: null});
  }

  render() {
    const numberPages = Math.floor(this.state.totalMovies / 5);

    return (
      <>
        <Navbar />
        <main>
          <Header />
          <Filter />
          { this.state.currentMovie === null ? <>
              <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
              <Painel viewMovieDetails={this.viewMovieDetails}  movies={this.state.movies}/>
            </>
            : 
              <MovieDetails closeMovieDetails={this.closeMovieDetails} currentMovie={this.state.currentMovie} />
            } 
          
         
          {
            this.state.totalMovies > 5 ? 
            <Pagination pages={numberPages} nextPage={this.state.nextPage}  currentPage={this.state.currentPage}/> : null
          }
        </main>
      </>
    );
  }
}

export default App;
