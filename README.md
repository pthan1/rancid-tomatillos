Rancid Tomatillos is a React app that displays and compares movies.  Users can find average ratings for the movie and add their own ratings to each movie.

# Screenshots

## Get the Code
1. Go to the project's [github page](https://github.com/codefordenver/rancid-tomatillos).
1. Copy a link to the git repo by clicking the green "Code" button and copying the SSH link.
1. In a terminal, navigate to the directory where you want to create the project folder and clone the repo:
    ```bash
    git clone <git-repo-name>
    ```
    
## Running the App
1. In a terminal, install the dependencies.
```npm install```

2. After installing the project dependencies, ```cd``` into the ```src``` folder.  Run ```nodemon server.js``` to start the Express server.
3. To start the app, run ```npm start``` in the project directory and navigate to ```http://localhost:3000```.

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
    -   Creating a REST API to add/delete ratings with Express.js

Challenges
- Async fetch calls
    - We had a few infinite loops of network calls that we were able to locate and fix with the browser's network tab.
- Figuring out the Cypress syntax

- Implementing Express API
## About Us:
- [jphorner](https://github.com/jphorner)
- [pthan1](https://github.com/pthan1)
