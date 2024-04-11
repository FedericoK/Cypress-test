describe('template spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context('Basic interactions',()=>{
    it('Button Click', () => {
      cy.get('.data-button').should("have.text", "Click me").click()
      cy.get('[rel="data-message"]').should('exist')  
    });

    it('Navigate to another page and input, return to home', () => {
      cy.get(".link-subs").contains('Subscribe to us!').click()
      cy.location("pathname").should('eq','/subscribe')
      cy.get('.data-form').within(($form)=>{
        cy.get('[data-test="input"]').type("test@test.com");
        cy.get('[data-test="submit-button"]').click()
      })
      
      cy.get('[rel="data-message"]').should('exist').contains("succes");

      cy.get('.link-home').click()
      cy.location("pathname").should('eq','/')
  
    });

    it('Navigate to another page and get a respond form and API, return home', () => {
      cy.get('.link-Api').should('have.text', 'Country API').click()
      cy.location("pathname").should('eq','/api')

      cy.get("[rel='data-input']").type('Paraguay{enter}')
      cy.get('[rel="Country-capital"]').should('not.contain', 'N/A')
      cy.get('[rel="Country-pop"]').should('not.contain', 'N/A')
      cy.get('[rel="Country-lang"]').should('not.contain', 'N/A')

      cy.get('.link-home').click()
      cy.location("pathname").should('eq','/')
    });
  })
  
})