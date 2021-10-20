const getSelectedMovie = (id) => {
	return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error('Something went wrong. Please try again.');
		})
		.then((data) => data.movie)
		.catch((error) => this.setState({ error: error.toString() }));
};

export default getSelectedMovie;
