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
//Add a constructor
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
    // a .then that sets State with the cleaned up data
    // a catch that displays an error message
  

// Should have a render function
  // return
    // Header component
    // two (2) HTML Sidebars
    // banner HTML
    // Movies component
      //pass props (movie details that we want to display)
      