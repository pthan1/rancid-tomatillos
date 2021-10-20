import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetails = ({ selectedMovie, unsetSelectedMovieFromState }) => {
	return (
		<div className="movie-details-container">
			<section className="movie-details">
				<img src={selectedMovie.backdrop_path} alt="still from a movie" /> <p>{selectedMovie.title}</p>
				<p>{selectedMovie.revenue}</p>
				<div className="return-button-container">
					<Link to="/">
						<button
							className="return-to-main-button"
							id="returnToMain"
							onClick={unsetSelectedMovieFromState}
						>
							Return to main
						</button>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default MovieDetails;

// {
// <img src={selectedMovie.backdrop_path} alt="still from a movie" />
// <p>{selectedMovie.budget}</p>
// <p>{selectedMovie.overview}</p>
// }

// key,
// id,
// movie,
// poster_path,
// backdrop_path,
// release_date,
// overview,
// average_rating,
// genres,
// name,
// budget,
// revenue,
// runtime,
// tagline,
