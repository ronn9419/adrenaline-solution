/// <reference types="cypress" />

context('Details page', () => {
  it('details page working', () => {
    cy.visit('http://localhost:3031')

    cy.get('[data-test-id="image-link"]').first().click()

    cy.url().should('include', '/details')

    cy.wait(1000)

    cy.get('[data-test-id="sort-by"]').click()

    cy.get('[data-test-id="date-view"]').first().contains('09/12/2004')
    cy.get('[data-test-id="date-view"]').last().contains('04/11/1970')

    cy.wait(1000)

    cy.get('[data-test-id="sort-by"]').click()

    cy.get('[data-test-id="date-view"]').first().contains('04/11/1970')
    cy.get('[data-test-id="date-view"]').last().contains('09/12/2004')
  })
})
