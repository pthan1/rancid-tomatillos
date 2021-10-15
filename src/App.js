import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

//import tempMoviesData.js


// Change App into a Class Component
// Add a constructor
  // In constructor,
    // inherit from parent
    // have a state
      // should have a movies property assigned to an empty array
      // should have an error property assigned to an empty string
      // loading property


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

  // Should set state

// Methods:
  // showMovieDetails
    // Should hide banner and cards container
    // Should show movie details display
  // hideMovieDetails
    // Resets selectedMovie property to empty object
  // displaySelectedMovie
    // Sets 'selectedMovie' property of selected movie to that movie's information

// Should have a render function
  // return
    // Header component
    // two (2) HTML Sidebars
    // banner HTML
    // Movies component
      //pass props (movie details that we want to display)
    // if (selectedMovie)
      // Render MovieDetails component container
      // Pass selectedMovie property through MovieDetails to be rendered
