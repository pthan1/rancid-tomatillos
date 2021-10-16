import React, { Component } from 'react';
import './App.css';
import './Card.css';
import './Header.js';
import Movies from './Movies';
import './Movies.css'
import './tempMoviesData';
import movieData from './tempMoviesData';
import './MovieDetails';

class App extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			error: '',
			isLoading: false,
			selectedMovie: {}
		};
	}

	componentDidMount = () => {
    this.setState({ movies: movieData.movies });
		// fetch from URL _____
		//.then that parses the response object
		// a .then that invokes a function in utils.js that cleans up the data to what we want to display
		// Should set state
		// Data will reflect:
		// id
		// movie
		// poster_path
		// backdrop_path
		// release_date
		// overview
		// average_rating
		// genres
		// id
		// name
		// budget
		// revenue
		// runtime
		// tagline
	};

	showSelectedMovieDetails = () => {
		// Should hide banner and cards container
		// Should show movie details display
	};

	hideSelectedMovieDetails = () => {
		this.setState({ selectedMovie: {} });
	};

	setSelectedMovieToState = (id) => {
		const selectedMovie = this.state.movies.find((movie) => {
			return id === this.state.movies.id;
		});
		this.setState({ selectedMovie: selectedMovie });
	};

	render() {
		return (
      <main>
				<section className="app-body">
        	<h1>Hello</h1>
        	<Movies showSelectedMovieDetails={this.showSelectedMovieDetails} allMovieData={this.state.movies}/>
				</section>
      </main>
    )
	}
}

// <Header />
// two (2) HTML Sidebars // banner HTML
// <Movies movies={this.state.movies} setSelectedMovieToState={this.setSelectedMovieToState} />
// {!this.state.movies && <h2>Loading</h2>}
// {this.state.selectedMovie && (
// 	<MovieDetails
// 		selectedMovie={this.state.selectedMovie}
// 		hideSelectedMovieDetails={this.hideSelectedMovieDetails}
// 	/>
// )}

export default App;
