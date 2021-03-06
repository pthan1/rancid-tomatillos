import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Header from './Header';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import './App.css';
import './Movies.css';
import './Card.css';
import './MovieDetails.css';
import './assets/johnny-automatic-tomatillo.svg';

class App extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			error: '',
			ratings: []
		};
	}

	componentDidMount = () => {
		fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Something went wrong. Please try again.');
			})
			.then((data) => {
				const cardMovieData = data.movies.map((movie) => {
					let cardRating = Math.round(movie.average_rating);
					return {
						id: movie.id,
						poster_path: movie.poster_path,
						title: movie.title,
						average_rating: cardRating
					};
				});
				this.setState({ movies: cardMovieData });
			})
			.catch((error) => this.setState({ error: error.toString() }));
		fetch('/api/v1/ratings')
			.then((response) => response.json())
			.then((ratings) => this.setState({ ratings: ratings.ratings }));
	};

	getSelectedMovie = (id) => {
		return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Something went wrong. Please try again.');
			})
			.then((data) => {
				if (!this.state.error) {
					this.setState({ selectedMovie: data.movie });
				}
			})
			.catch((error) => this.setState({ error: error.toString() }));
	};

	render() {
		return (
			<main>
				<section className="app-body">
					<aside className="left-sidebar" />
					<aside className="right-sidebar" />
					<Header />
					<div className="banner">
						<section className="banner-text">
							<h2>Skip the box office. This evening is in your hands.</h2>
						</section>
					</div>
					<section className="all-movies-container">
						{this.state.error && <h2>{this.state.error}</h2>}
						<Route
							exact
							path="/"
							render={() => {
								if (!this.state.error) {
									return <Movies allMovieData={this.state.movies} />;
								}
							}}
						/>
						<Route
							exact
							path="/movies/:id"
							render={({ match }) => {
								let selectedMovieId = match.params.id;
								if (!this.state.error) {
									return (
										<MovieDetails
											selectedMovieId={selectedMovieId}
											userRatings={this.state.ratings}
										/>
									);
								}
							}}
						/>
					</section>
				</section>
			</main>
		);
	}
}

export default App;
