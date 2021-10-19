import React, { Component } from "react";
import "./App.css";
import "./MovieDetails.css";
import "./Card.css";
import Header from "./Header.js";
import Movies from "./Movies";
import "./Movies.css";
import MovieDetails from "./MovieDetails";
import "./assets/johnny-automatic-tomatillo.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: "",
      isLoading: false,
      selectedMovie: {},
      isAMovieSelected: false,
    };
  }

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong. Please try again.");
      })
      .then((data) => {
        console.log(data);
        this.setState({ movies: data.movies });
      })
      .catch((error) => this.setState({ error: error.toString() }));
  };

  setSelectedMovieToState = (id) => {
    this.setState({ isAMovieSelected: true });
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong. Please try again.");
      })
      .then((data) => {
        if (!this.state.error) {
          this.setState({ selectedMovie: data.movie });
        }
      })
      .catch((error) => this.setState({ error: error.toString() }));
  };

  unsetSelectedMovieFromState = () => {
    this.setState({ isAMovieSelected: false, selectedMovie: {}, error: "" });
  };

  render() {
    return (
      <main>
        <section className="app-body">
          <aside className="left-sidebar"></aside>
          <aside className="right-sidebar"></aside>
          <Header />
          <div className="banner">
            <section className="banner-text">
              <h2>Testing this element. Wow.</h2>
            </section>
          </div>
          <section className="all-movies-container">
            {this.state.error && <h2>{this.state.error}</h2>}
            {!this.state.isAMovieSelected ? (
              <Movies
                setSelectedMovieToState={this.setSelectedMovieToState}
                allMovieData={this.state.movies}
              />
            ) : (
              <MovieDetails
                selectedMovie={this.state.selectedMovie}
                unsetSelectedMovieFromState={this.unsetSelectedMovieFromState}
              />
            )}
          </section>
        </section>
      </main>
    );
  }
}

export default App;
