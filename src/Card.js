//// Card.js

import React from 'react';

const Card = ({showMovieDetails, id, title, poster_path, average_rating}) => {
  return (
    <button className="movie-card" onClick={() => showMovieDetails(id)}>
      <img src={poster_path} alt="Movie poster" />
      <h3>{title}</h3>
    </button>
  )
}

//
// const Card = ()
//
// // Should be functional component
// // Cards should be rendered as buttons
// // Cards should have a fixed width and variable height
// // Should have an onClick attribute which fires function in App
//   // This will change the view to display individual movie's info
//
// // Props:
//   // showMovieDetails (from App)
//   // id
//   // title
//   // poster_path
//   // average_rating
//
// // Rendered elements:
//   // Button
//   // onClick attribute
//   // Individual container
//   // Poster
//   // Title
//   // Average rating
//   // CYOA Element (notes for now)
//     // ID (not shown)
//
//
export default Card;
