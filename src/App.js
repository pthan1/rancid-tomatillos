import React, { Component } from 'react';
import './App.css';
import './Card.css';
import Header from './Header.js';
import Movies from './Movies';
import './Movies.css';
import MovieDetails from './MovieDetails';
import './MovieDetails.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			error: '',
			isLoading: false,
			selectedMovie: {},
			isAMovieSelected: false
		};
	}

	componentDidMount = () => {
		fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
		.then(response => response.json())
		.then(data => {
			this.setState({ movies: data.movies })
		})
	};

	setSelectedMovieToState = (id) => {
		fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
		.then(response => response.json())
		.then(data => {
			this.setState({ selectedMovie: data.movie })
		})
		const selectedMovie = this.state.movies.find((movie) => {
			return movie.id === id;
		});
		this.setState({ isAMovieSelected: true, selectedMovie: selectedMovie });
	};

	unsetSelectedMovieFromState = () => {
		this.setState({ isAMovieSelected: false, selectedMovie: {} });
	};

	render() {
		return (
			<main>
				<section className="app-body">
					<aside className="left-sidebar"></aside>
					<Header />
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
					<aside className="right-sidebar"></aside>
				</section>
			</main>
		);
	}
}


export default App;
