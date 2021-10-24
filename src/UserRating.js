import React from 'react';
import './UserRating.css';

const UserRating = ({ userRating }) => {
	return (
		<div className="rating-information">
			<span className="your-rating">YOUR RATING:</span>
			<section className="user-rating-container">
				<div className="user-rating">{userRating}</div>
			</section>
		</div>
	);
};

export default UserRating;
