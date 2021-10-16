import React from 'react';

const Card = ({ setSelectedMovieToState, id, title, poster_path, average_rating }) => {
	return (
		<article className="card-container">
			<button className="movie-card" onClick={() => setSelectedMovieToState(id)} id={id}>
				<img src={poster_path} alt="Movie poster" />
				<h3>{title}</h3>
			</button>
		</article>
	);
};

export default Card;
