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
			error: ''
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
				this.setState({ movies: data.movies });
			})
			.catch((error) => this.setState({ error: error.toString() }));
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
							<h2>Testing this element. Wow.</h2>
						</section>
					</div>
					<section className="all-movies-container">
						{this.state.error && <h2>{this.state.error}</h2>}
						<Route
							exact
							path="/"
							render={() => {
								if (this.state.error) {
									this.setState({ error: '' });
								}
								if (!this.state.error) {
									return (
										<Movies
											getSelectedMovie={this.getSelectedMovie}
											allMovieData={this.state.movies}
										/>
									);
								}
							}}
						/>
						<Route
							exact
							path="/movies/:id"
							render={({ match }) => {
								let selectedMovieId = parseInt(match.params.id);
								if (!this.state.error) {
									return (
										<MovieDetails
											// selectedMovie={this.state.selectedMovie}
											selectedMovieId={selectedMovieId}
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

// <Route path="/" render={() => {
// 	<section className="all-movies-container">
// 		<Movies
// 			setSelectedMovieToState={this.setSelectedMovieToState}
// 			allMovieData={this.state.movies}
// 		/>
// 	</section>
// }} />
// {!this.state.isAMovieSelected ? (
//   <Movies
//     setSelectedMovieToState={this.setSelectedMovieToState}
//     allMovieData={this.state.movies}
//   />
// )
// : (
//   <MovieDetails
//     selectedMovie={this.state.selectedMovie}
//     unsetSelectedMovieFromState={this.unsetSelectedMovieFromState}
//   />
// )}
// </section>

// const whatever = {
// // On page load, the router ("/") should render all of the movies in state as cards
// 	// Movies component
// 	// allMovieData as props
// // If a movie is clicked, the router should redirect to "/movies/:id"
// 	// Keep all props
// 	// Grab ID from button click and pull it into the route
// // this.state.selectedMovie.id
// Start by changing URL
// }

export default App;
