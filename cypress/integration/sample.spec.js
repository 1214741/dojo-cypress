describe('My First Cypress Test', () => {
    it('Assert Example', () => {
      expect(true).to.equal(true)
    })

    it('Visits cypress test webpage ', () => {
      cy.visit('https://example.cypress.io/')
      cy.contains('type').click()
      cy.url().should('include','/commands/actions')

      cy.get('.action-email')
  .type('jfernando.tamayo@udea.edu.co').should('have.value', 'jfernando.tamayo@udea.edu.co')

  cy.get('.action-form')
  .find('[type="text"]').type('123456789')
  cy.get('.action-form').submit()
  .next().should('contain', 'Your form has been submitted!')
    })
})