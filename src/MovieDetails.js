//// MovieDetails

import React from 'react';

const MovieDetails = ({ selectedMovie, unsetSelectedMovieFromState }) => {
	return (
		<div className="movie-details-container">
			<section className="movie-details">
				<img src={selectedMovie.backdrop_path} alt="still from a movie" />
				<p>{selectedMovie.budget}</p>
				<p>{selectedMovie.overview}</p>
			</section>
		</div>
	);
};

// Should be passed individual movie data from App (somehow some way)
//
// Props:
// hideSelectedMovieDetails (passed in from App)
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

// Make button to invoke hideSelectedMovieDetails

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
// hideSelectedMovieDetails
