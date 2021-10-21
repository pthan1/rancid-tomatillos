import React, { Component } from "react";

import { Link } from "react-router-dom";

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: {},
    };
  }

  componentDidMount = () => {
    console.log(this.props);
    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.selectedMovieId}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong. Please try again.");
      })
      .then((data) => {
        this.setState({ selectedMovie: data.movie });
      })
      .catch((error) => this.setState({ error: error.toString() }));
  };

  render() {
    let movieRating = Math.round(this.state.selectedMovie.average_rating);
    let movieGenres = this.state.selectedMovie.genres;
    return (
      <div className="movie-details-container">
        <div class="backdrop-container">
          <img
            className="movie-backdrop"
            src={this.state.selectedMovie.backdrop_path}
            alt="still from a movie"
          />
        </div>
        <span class="movie-information-background"></span>
        <section className="movie-information">
          <div className="information-elements">
            <h1 class="movie-title">{this.state.selectedMovie.title}</h1>
            <p className="movie-genres">{movieGenres}</p>
            <p>
              Average rating: <span class="rating-number">{movieRating}</span>
            </p>
            <p className="movie-overview">
              {this.state.selectedMovie.overview}
            </p>
            <div className="return-button-container">
              <Link to="/">
                <button className="return-to-main-button" id="returnToMain">
                  Return to main
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MovieDetails;

// tagline,
