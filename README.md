Rancid Tomatillos is a React app that displays and compares movies.  Users can find average ratings for the movie and add their own ratings to each movie.

# Screenshots

## Get the Code
1. Go to the project's [github page](https://github.com/codefordenver/rancid-tomatillos).
1. Copy a link to the git repo by clicking the green "Code" button and copying the SSH link.
1. In a terminal, navigate to the directory where you want to create the project folder and clone the repo:
    ```bash
    git clone git@github.com:pthan1/rancid-tomatillos.git
    ```
    
## Running the App
1. In a terminal, install the dependencies.
```npm install```

2. After installing the project dependencies, ```cd``` into the ```src``` folder.  Run ```nodemon server.js``` to start the Express server.
3. To start the app, run ```npm start``` in the project directory and navigate to ```http://localhost:3000```.


## Reflections

This was a project whose difficulty was clearly demonstrated throughout its progression. Although it seemed straightforward at first, the complexity of the website increased with each new technology we introduced.

The React components, though initially challenging to set up, were simple compared to the process of setting up our Express backend and API calls. Between rendering, routing, fetching, and passing props between components, we were regularly straining to remember which parts of our application held onto which pieces of data. This complex web of information was a wake-up call towards the importance of data structure and clear documentation.

Even when the code proved challenging, however, the wins proved all the more satisfying. This project truly pushed us to experiment with new technologies, resolve errors in unique ways, and test the limits of our technical skill sets.

## Technologies Used
- HTML
- CSS
- JavaScript
- React
- Express.js (REST API)
- Cypress (Testing)

## Wins & Challenges
Wins
- Creating a fully-functional React app, then iterating and adding differentfeatures/technologies such as:
    -   Dynamic Routing with React Router
    -   Front End testing with Cypress
    -   Handrolling a REST API to add/delete ratings with Express.js

Challenges
- Async fetch calls
    - We had a few infinite loops of network calls that we were able to locate and fix with the browser's network tab.
- Figuring out the Cypress syntax

- Implementing Express API
## About Us:
- [jphorner](https://github.com/jphorner)
- [pthan1](https://github.com/pthan1)
