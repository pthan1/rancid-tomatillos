import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MovieDetails extends Component {
	constructor() {
		super();
		this.state = {
			selectedMovie: {}
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
	};

	render() {
		return (
			<div className="movie-details-container">
				<section className="movie-details">
					<img src={this.state.selectedMovie.backdrop_path} alt="still from a movie" />
					<p>{this.state.selectedMovie.title}</p>
					<p>{this.state.selectedMovie.revenue}</p>
					<div className="return-button-container">
						<NavLink to="/">
							<button className="return-to-main-button" id="returnToMain">
								Return to main
							</button>
						</NavLink>
					</div>
				</section>
			</div>
		);
	}
}

export default MovieDetails;

// tagline,
