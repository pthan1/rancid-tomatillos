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
	// console.log(request.body);

	app.locals.ratings.push({ rating_id, movie_id, rating, user_id });
	response.status(201).json({ rating_id, movie_id, rating, user_id });
});

app.patch('/api/v1/ratings', (request, response) => {
	//request body = { movie_id: <Integer>,
	//rating: <Integer between 1 and 10>,
	// rating_id: ,
	//user_id: 2}
	//Find a rating in the db with the same rating_id as that of the request body
	const rating = app.locals.ratings.find((rating) => rating.rating_id === parseInt(request.body.rating_id));
	console.log(request.body.rating_id);
	// error handling
	// if there's no rating in the database with the same rating_id as the request, then we to return a 404 message.
	if (!rating) {
		return response.status(404).json('Something went wrong.');
	}

	// If we find a rating in database, with the same rating_id as the request
	//update that rating's rating to the rating in the request body
	// push that new rating into app.locals.
	// respond in json the new rating object
	rating.rating = request.body.rating;
	// app.locals.ratings.push(rating);
	response.json(rating);
});

app.listen(app.get('port'), () => {
	console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`);
});
