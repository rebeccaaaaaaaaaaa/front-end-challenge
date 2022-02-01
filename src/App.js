import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Filter from "./components/Filters";
import Painel from "./components/Painel";
import Search from "./components/Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchMovie: "",
    };
    this.apiKey = process.env.REACT_APP_API_KEY;

  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=pt-BR&query=${this.state.searchMovie}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({movies: [...data.results]})
    });
  }

  handleChange = (e) => {
    this.setState({searchMovie: e.target.value});
  }

  render() {
    return (
      <>
        <Navbar />
        <main>
          <Header />
          <Filter />
          <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
          <Painel movies={this.state.movies}/>
        </main>
      </>
    );
  }
}

export default App;
