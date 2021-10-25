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
				throw new Error('The user rating for this movie could not be found.');
			})
			.then((data) => {
				this.setState({ movieRatings: data.ratings });
				console.log('GET, ratings, componentDidMount', data.ratings);
			})
			.then((data) => {
				if (this.state.movieRatings.length) {
					let matchedMovieByRating = this.state.movieRatings.find(
						(rating) => parseInt(rating.movie_id) === parseInt(this.props.selectedMovieId)
					);
					console.log('GET, matchedMovieByRating, componentDidMount', matchedMovieByRating);
					this.setState({ movieRating: matchedMovieByRating, userRating: matchedMovieByRating.rating });
				}
			})
			.catch((error) => this.setState({ error: error.toString() }));
	};

	addUserRating = (newRating) => {
		if (!this.state.movieRating) {
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
				.then((response) => console.log('POST', response))
				.then((data) => data);
		}

		if (this.state.movieRating) {
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
				.then((response) => console.log('PATCH', response))
				.then((data) => data);
		}
		this.setState({ userRating: newRating });
		this.state.movieRatings.push(newRating);
		console.log(this.state.movieRatings);
	};

	deleteUserRating = () => {
		const ratingId = this.state.movieRating.rating_id;

		fetch(`http://localhost:3001/api/v1/ratings/${ratingId}`, {
			method: 'DELETE'
		})
			.then((response) => response.json())
			.then((response) => console.log(response));

		this.setState({ userRating: 0 });
	};

	componentDidUpdate = () => {
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
