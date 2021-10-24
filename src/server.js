const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3001);
app.use(express.json());
app.locals.title = 'User Ratings';

app.locals.ratings = [
	{
		movie_id: 694919,
		rating_id: 1634949641069,
		user_id: 1,
		rating: 4
	}
];

app.get('/api/v1/ratings', (request, response) => {
	const ratings = app.locals.ratings;

	response.json({ ratings });
});

app.post('/api/v1/ratings', (request, response) => {
	const rating_id = Date.now();
	const { movie_id, rating, user_id } = request.body;
	app.locals.ratings.push({ rating_id, movie_id, rating, user_id });
	response.status(201).json({ rating_id, movie_id, rating, user_id });
});

app.patch('/api/v1/ratings/:rating_id', (request, response) => {
	const body = request.body;
	const rating = app.locals.ratings.find((rating) => rating.rating_id === parseInt(request.params.rating_id));

	if (!rating) {
		return response.status(404).json('Rating not found');
	}
	console.log('before', app.locals.ratings);

	// validate only rating editable
	if (body.movie_id || body.rating_id || body.user_id) {
		response.status(400).json('Can only edit rating');
	}

	if (body.rating) {
		rating.rating = body.rating;
	}
	console.log('after', app.locals.ratings);
	response.json(rating);
});

app.listen(app.get('port'), () => {
	console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`);
});
