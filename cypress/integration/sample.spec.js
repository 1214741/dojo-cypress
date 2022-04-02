describe('My First Cypress Test', () => {
    it('Assert Example', () => {
      expect(true).to.equal(true)
    })

    it('Visits cypress test webpage ', () => {
      cy.visit('https://example.cypress.io/')
      cy.contains('type').click()
      cy.url().should('include','/commands/actions')
      
    })
})