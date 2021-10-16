import React from 'react';

const MovieDetails = ({ selectedMovie, unsetSelectedMovieFromState }) => {
	return (
		<div className="movie-details-container">
			<section className="movie-details">
				<img src={selectedMovie.backdrop_path} alt="still from a movie" />
				<p>{selectedMovie.budget}</p>
				<p>{selectedMovie.overview}</p>
				<button className="return-to-main-button" onClick={unsetSelectedMovieFromState}>
					Return to Main
				</button>
			</section>
		</div>
	);
};

export default MovieDetails;

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
