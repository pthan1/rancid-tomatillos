//// MovieDetails

import React from 'react';

const movieDetails = ({ key, id, movie, poster_path, backdrop_path, release_date, overview, average_rating, genres, name, budget, revenue, runtime, tagline, hideSelectedMovieDetails }) => {
  return (
    <div className="movie-details-container">
      <section className="movie-details">
        <img src={backdrop_path} />
      </section>
    </div>
  )
}


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
