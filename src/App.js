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
  // Should fetch request all movie data
  // Should parse data (.then)
    // Should set state as all movie data
  // Should have .catch for displaying rendering or fetch error

// Should have a render function
  // return
    // Header component
    // two (2) HTML Sidebars
    // banner HTML
    // Movies component
      //pass props (movie details that we want to display)
