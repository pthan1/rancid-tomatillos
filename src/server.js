const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.set('port', process.env.PORT || 3001);
app.use(express.json());
app.locals.title = 'User Ratings';

app.locals.ratings = [];

app.get('/api/v1/ratings', (request, response) => {
	const ratings = app.locals.ratings;

	response.json({ ratings });
});

app.post('/api/v1/ratings', (request, response) => {
	const body = request.body;
	const rating_id = Date.now();
	const { movie_id, rating, user_id } = request.body;

	if (!body.movie_id || !body.rating || !body.user_id) {
		return response.status(400).json('Movie ID, rating, and user id are required');
	}

	app.locals.ratings.push({ rating_id, movie_id, rating, user_id });
	response.status(201).json({ rating_id, movie_id, rating, user_id });
});

app.patch('/api/v1/ratings/:rating_id', (request, response) => {
	const body = request.body;
	const rating = app.locals.ratings.find((rating) => rating.rating_id === parseInt(request.params.rating_id));

	if (!rating) {
		return response.status(404).json('Rating not found');
	}

	// validate only rating editable
	if (body.movie_id || body.rating_id || body.user_id) {
		response.status(400).json('Can only edit rating');
	}

	if (body.rating) {
		rating.rating = body.rating;
	}
	response.status(201).json(rating);
});

app.delete('/api/v1/ratings/:rating_id', (request, response) => {
	const body = request.body;
	const rating = app.locals.ratings.find((rating) => rating.rating_id === parseInt(request.params.rating_id));

	if (!rating) {
		return response.status(404).json('Rating not found');
	}

	app.locals.ratings = app.locals.ratings.filter((rating) => rating.rating_id !== parseInt(request.params.rating_id));

	response.status(204);
});

app.listen(app.get('port'), () => {
});
