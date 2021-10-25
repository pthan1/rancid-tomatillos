describe('Movie Details page flows', () => {
	beforeEach(() => {
		cy
			.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
				statusCode: 200,
				body: {
					movies: [
						{
							id: 694919,
							poster_path: 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
							backdrop_path: 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
							title: 'Money Plane',
							average_rating: 6.142857142857143,
							release_date: '2020-09-29'
						}
					]
				}
			})
			.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
				statusCode: 200,
				body: {
					movie: {
						average_rating: 6.142857142857143,
						backdrop_path: 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
						budget: 0,
						genres: [
							'Action'
						],
						id: 694919,
						overview:
							"A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
						poster_path: 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
						release_date: '2020-09-29',
						revenue: 0,
						runtime: 82,
						tagline: '',
						title: 'Money Plane'
					}
				}
			})
			.intercept('GET', 'http://localhost:3001/api/v1/ratings', {
				statusCode: 200,
				body: {
					ratings: [
						{
							movie_id: 1,
							id: 5351,
							rating: 8,
							user_id: 2,
							rating_id: 5654
						}
					]
				}
			})
			.visit('http://localhost:3000')
			.get('.movie-card')
			.click({ force: true });
	});

	it('Should have an option for returning to the All Movies view', () => {
		cy.get('.return-to-main-button').click();
		cy.get('.movie-card').should('be.visible');
		cy.get('.movie-details-container').should('not.exist');
	});

	it("Should display a user's rating", () => {
		cy.get('.rating-9').click().get('.user-rating').contains(9);
	});

	it("Should receive an input for the user's rating", () => {
		cy.get('.rating-list').should('exist');
		cy
			.get('.rating-1')
			.should('exist')
			.get('.rating-2')
			.should('exist')
			.get('.rating-3')
			.should('exist')
			.get('.rating-4')
			.should('exist')
			.get('.rating-5')
			.should('exist')
			.get('.rating-6')
			.should('exist')
			.get('.rating-7')
			.should('exist')
			.get('.rating-8')
			.should('exist')
			.get('.rating-9')
			.should('exist')
			.get('.rating-10')
			.should('exist');
	});

	it('Should be able to delete a rating', () => {
		cy.get('.rating-9').click().get('.delete-rating').click().get('.user-rating-container').should('not.exist');
	});

	it("Should display a user's rating after it is added", () => {
		cy.get('.rating-9').click().get('.user-rating').contains(9);
	});

	it('Should be able to delete a rating', () => {
		cy.get('.delete-rating').click().get('.user-rating-container').should('not.exist');
	});

	it('Should display persisting rating after leaving the page and returning', () => {
		cy
			// .intercept('GET', 'http://localhost:3001/api/v1/ratings', {
			// 	statusCode: 200,
			// 	body: {
			// 		ratings: [
			// 			{
			// 				movie_id: 694919,
			// 				id: 5351,
			// 				rating: 4,
			// 				user_id: 2,
			// 				rating_id: 5654
			// 			}
			// 		]
			// 	}
			// })
			.intercept('POST', 'http://localhost:3001/api/v1/ratings', {
				statusCode: 200,
				headers: {
					'Content-Type': 'application/json'
				},
				body: {
					rating_id: 5654,
					movie_id: 694919,
					rating: 8,
					user_id: 2
				}
			})
			.get('.rating-8')
			.click()
			.get('.user-rating')
			.contains(8)
			.get('.return-to-main-button')
			.click()
			.get('.movie-card')
			.click({ force: true })
			.get('.user-rating')
			.contains(8);
	});
});
