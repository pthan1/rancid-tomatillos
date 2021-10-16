import './App.css';

// Should contain functions to clean up data
// Should handle initial fetch requests on page load

// Should have a componentDidMountFunction
// fetch from URL _____
//.then that parses the response object
// a .then that invokes a function in utils.js that cleans up the data to what we want to display
// Data will reflect:
// id
// movie
// poster_path
// backdrop_path
// release_date
// overview
// average_rating
// genres
// id
// name
// budget
// revenue
// runtime
// tagline

// a .then that sets State with the cleaned up data
// a catch that displays an error message

const hide = (element) => {
	element.classList.add('hidden');
};

const show = (element) => {
	element.classList.remove('hidden');
};

// Don't forget to export
