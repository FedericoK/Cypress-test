describe('template spec', () => {
  it('cy.request() - make an XHR request', () => {
    // https://on.cypress.io/request
    cy.request(' https://app.api.testing.tilefive.com/customers/952657',{
      auth: 'alpha1'
    })
      .should((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('cy.request() with query parameters', () => {
    // will execute request
    // https://jsonplaceholder.cypress.io/comments?postId=1&id=3
    cy.request({
      url: 'https://app.api.testing.tilefive.com/customers/952657',
      auth: {
        postId: 1,
        id: 3,
      },
    })
    .its('body')
    .should('be.an', 'array')
    .and('have.length', 1)
    .its('0') // yields first element of the array
    .should('contain', {
      postId: 1,
      id: 3,
    })
  })
})