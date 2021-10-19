import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  setSelectedMovieToState,
  id,
  title,
  poster_path,
  average_rating,
}) => {
  return (
    <Link to={`/movies/${id}`} onClick={() => setSelectedMovieToState(id)}>
      <article className="card-container">
        <button className="movie-card" id={id}>
          <img src={poster_path} alt="Movie poster" />
          <h3>{title}</h3>
        </button>
      </article>
    </Link>
  );
};

export default Card;
