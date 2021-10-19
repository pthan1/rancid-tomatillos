import React from "react";

const MovieDetails = ({ selectedMovie, unsetSelectedMovieFromState }) => {
  return (
    <div className="movie-details-container">
      <section className="movie-details">
        <p>{selectedMovie.title}</p>
        <div className="return-button-container">
          <button
            className="return-to-main-button"
            id="returnToMain"
            onClick={unsetSelectedMovieFromState}
          >
            Return to main
          </button>
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
