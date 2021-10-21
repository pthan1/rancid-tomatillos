import React from 'react';
import Card from './Card';

const Movies = ({ getSelectedMovie, allMovieData }) => {
	const movieCards = allMovieData.map((movie) => {
		return (
			<Card
				className={'card'}
				id={movie.id}
				key={movie.id}
				title={movie.title}
				poster_path={movie.poster_path}
				average_rating={movie.average_rating}
				getSelectedMovie={getSelectedMovie}
			/>
		);
	});

	return <div className="movies-container">{movieCards}</div>;
};

export default Movies;
