import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, poster_path, average_rating }) => {
	return (
		<Link to={`/movies/${id}`}>
			<article className="card-container">
				<button className="movie-card" id={id}>
					<img src={poster_path} alt="Movie poster" />
					<h3>{title}</h3>
					<div className="average-rating-container">
						<h2 className="average-rating"><h5 className="avg">AVG</h5>{average_rating}</h2>
					</div>
				</button>
			</article>
		</Link>
	);
};

export default Card;
