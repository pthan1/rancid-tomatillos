import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
	constructor() {
		super();
		this.state = {
			selectedMovie: {},
			movieRatings: [],
			userRating: 0
		};
	}

	componentDidMount = () => {
		fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.selectedMovieId}`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Something went wrong. Please try again.');
			})
			.then((data) => {
				this.setState({ selectedMovie: data.movie });
			})
			.catch((error) => this.setState({ error: error.toString() }));
		fetch('/api/v1/ratings')
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('The user rating for this movie could not be found.')
			})
			.then((data) => {
				this.setState({ movieRatings: data.ratings })
			})
			.then((data) => {
				if (this.state.movieRatings.length) {
					let matchedMovieByRating = this.state.movieRatings.find( rating => parseInt(rating.movie_id) === parseInt(this.props.selectedMovieId));
					this.setState({ userRating: matchedMovieByRating })
				}
			})
			.catch((error) => this.setState({ error: error.toString() }));
	};

	render() {
		return (
			<div className="movie-details-container">
				<div className="backdrop-container">
				<div className="rating-information">
					<span className="your-rating">YOUR RATING:</span>
					<section className="user-rating-container">
						{this.state.userRating && <div className="user-rating">{this.state.userRating.rating}</div>}
					</section>
				</div>
					<img
						className="movie-backdrop"
						src={this.state.selectedMovie.backdrop_path}
						alt="still from a movie"
					/>
				</div>
				<span className="movie-information-background" />
				<section className="movie-information">
					<div className="information-elements">
						<h1 className="movie-title">{this.state.selectedMovie.title}</h1>
						<p className="movie-genres">{this.state.selectedMovie.genres}</p>
						<p>
							Average rating: <span className="rating-number">{this.state.selectedMovie.average_rating}</span>
						</p>
						<p className="movie-overview">{this.state.selectedMovie.overview}</p>
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
