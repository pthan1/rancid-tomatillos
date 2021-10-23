const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3001);
app.use(express.json());
app.locals.title = 'User Ratings'

app.locals.ratings = [
  {
    movie_id: 694919,
    rating_id: 1634949641069,
    user_id: 1,
    rating: 4,
  }
];

app.get('/api/v1/ratings', (request, response) => {
  const ratings = app.locals.ratings;

  response.json({ ratings });
})

app.post('/api/v1/ratings', (request, response) => {
  const rating_id = Date.now();
  const { movie_id, rating, user_id } = request.body;
  // console.log(request.body);

  app.locals.ratings.push({ rating_id, movie_id, rating, user_id });
  response.status(201).json({ rating_id, movie_id, rating, user_id });
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`);
})
