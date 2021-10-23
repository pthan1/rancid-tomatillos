describe("Main page flows", () => {
  beforeEach(() => {});

  it("Should be able to run tests", () => {
    expect(true).to.equal(true);
  });

  it("Should not display any movies when a fetch request fails", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 500,
      }
    );
    cy.visit("http://localhost:3000")
      .get(".movies-container")
      .should("not.exist");
  });

  it("Should display all movies on page load", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 200,
        body: {
          movies: [
            {
              id: 694919,
              poster_path:
                "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
              backdrop_path:
                "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
              title: "Money Plane",
              average_rating: 6.142857142857143,
              release_date: "2020-09-29",
            },
            {
              id: 337401,
              poster_path:
                "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
              backdrop_path:
                "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
              title: "Mulan",
              average_rating: 5.2727272727272725,
              release_date: "2020-09-04",
            },
            {
              id: 718444,
              poster_path:
                "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
              backdrop_path:
                "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
              title: "Rogue",
              average_rating: 6.166666666666667,
              release_date: "2020-08-20",
            },
            {
              id: 539885,
              poster_path:
                "https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
              backdrop_path:
                "https://image.tmdb.org/t/p/original//54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
              title: "Ava",
              average_rating: 5.142857142857143,
              release_date: "2020-07-02",
            },
            {
              id: 581392,
              poster_path:
                "https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",
              backdrop_path:
                "https://image.tmdb.org/t/p/original//gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg",
              title: "Peninsula",
              average_rating: 7.6,
              release_date: "2020-07-15",
            },
            {
              id: 726739,
              poster_path:
                "https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg",
              backdrop_path:
                "https://image.tmdb.org/t/p/original//t22fWbzdnThPseipsdpwgdPOPCR.jpg",
              title: "Cats & Dogs 3: Paws Unite",
              average_rating: 7,
              release_date: "2020-10-02",
            },
          ],
        },
      }
    ).visit("http://localhost:3000");
    cy.get(".movie-card").should("be.visible");
  });

  it("Should return an error when a fetch call fails", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 500,
      }
    ).visit("http://localhost:3000");
    cy.contains("Something went wrong. Please try again.");
  });

  it("Should be able to click on a movie poster to change page views and should display specific details about the movie that was clicked", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 200,
        body: {
          movies: [
            {
              id: 694919,
              poster_path:
                "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
              backdrop_path:
                "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
              title: "Money Plane",
              average_rating: 6.142857142857143,
              release_date: "2020-09-29",
            },
          ],
        },
      }
    )
      .intercept(
        "GET",
        "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919",
        {
          statusCode: 200,
          body: {
            movie: {
              average_rating: 6.142857142857143,
              backdrop_path:
                "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
              budget: 0,
              genres: ["Action"],
              id: 694919,
              overview:
                "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
              poster_path:
                "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
              release_date: "2020-09-29",
              revenue: 0,
              runtime: 82,
              tagline: "",
              title: "Money Plane",
            },
          },
        }
      )
      .visit("http://localhost:3000")
      .get(".movie-card")
      .click({ force: true })
      .get(".movie-details-container")
      .should("be.visible")
      .get("p")
      .should("be.visible");
  });

	it("Should display a rating on each movie card if the user has added a rating", () => {

	});

	it("Should update the rating on the card if the user has changed its rating", () => {

	});

	it("Should not display a rating on a card if the user has deleted their rating", () => {

	};
});
