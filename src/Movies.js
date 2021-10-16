//// Movies

import React from 'react';
import Card from './Card';

const Movies = ({setSelectedMovieToState, allMovieData}) => {

  const movieCards = allMovieData.map( movie => {
    return (
      <Card
        className={'card'}
        id={movie.id}
        key={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        average_rating={movie.average_rating}
        setSelectedMovieToState={setSelectedMovieToState}
      />
    )
  })

  return (
    <div className="movies-container">
      {movieCards}
    </div>
  )
}


// Should contain movie cards
// Should be rendered on page load
// Should have props passed to it from App
// Should be passed all movie data from App
// Should pass props to cards
// Should pass individual card details to individual cards
// Should return div containing cards

// Props:
  // showMovieDetails
  // allMovieData

// Iterating:
  // Should map over allMovieData
    // New variable should be called movieCards
      // should return Card JSX
      // props should be passed into Card (particularly showMovieDetails)

export default Movies;
