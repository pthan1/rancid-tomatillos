import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserRating from './UserRating';
import Form from './UserRatingForm';

class MovieDetails extends Component {
	constructor() {
		super();
		this.state = {
			selectedMovie: {},
			movieRatings: [],
			movieRating: {},
			userRating: 0,
			hasBeenRated: false
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
				throw new Error('The user rating for this movie could not be found.');
			})
			.then((data) => {
				this.setState({ movieRatings: data.ratings });
			})
			.then((data) => {
				if (this.state.movieRatings.length) {
					let matchedMovieByRating = this.state.movieRatings.find(
						(rating) => parseInt(rating.movie_id) === parseInt(this.props.selectedMovieId)
					);
					this.setState({ movieRating: matchedMovieByRating, userRating: matchedMovieByRating.rating });
				}
			})
			.catch((error) => this.setState({ error: error.toString() }));
	};

	addUserRating = (newRating) => {
		if (!this.state.hasBeenRated) {
			fetch('http://localhost:3001/api/v1/ratings', {
				method: 'POST',
				body: JSON.stringify({
					movie_id: parseInt(this.state.selectedMovie.id),
					rating: parseInt(newRating),
					user_id: 1
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then((response) => response.json())
				.then((data) => this.setState({ movieRating: data }))
			this.setState({ hasBeenRated: true })
		} else if (this.state.hasBeenRated) {
			fetch(`http://localhost:3001/api/v1/ratings/${this.state.movieRating.rating_id}`, {
				method: 'PATCH',
				body: JSON.stringify({
					rating: parseInt(newRating)
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then((response) => response.json())
				.then((data) => data);
		}
		this.setState({ userRating: newRating });
	};

	deleteUserRating = () => {
		const ratingId = this.state.movieRating.rating_id;

		fetch(`http://localhost:3001/api/v1/ratings/${ratingId}`, {
			method: 'DELETE'
		})
			.then((response) => response.json())

		this.setState({ userRating: 0, hasBeenRated: false });
	};

	render() {
		return (
			<div className="movie-details-container">
				<div className="backdrop-container">
					{this.state.userRating !== 0 && <UserRating userRating={this.state.userRating} />}
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
							Average rating:{' '}
							<span className="rating-number">{Math.round(this.state.selectedMovie.average_rating)}</span>
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
				<Form addUserRating={this.addUserRating} deleteUserRating={this.deleteUserRating} />
			</div>
		);
	}
}

export default MovieDetails;

// tagline,
