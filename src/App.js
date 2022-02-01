import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Filter from "./components/Filters";
import Painel from "./components/Painel";
import Search from "./components/Search";
import Pagination from "./components/Pagination";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchMovie: "",
      totalMovies: 0,
      currentPage: 1
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

  render() {
    const numberPages = Math.floor(this.state.totalMovies / 5);

    return (
      <>
        <Navbar />
        <main>
          <Header />
          <Filter />
          <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
          <Painel movies={this.state.movies}/>
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
