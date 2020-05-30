/// <reference types="cypress" />

context('List page', () => {
  it('list page working', () => {
    cy.visit('http://localhost:3031')

    cy.get('[data-test-id="app-shell"]')

    cy.get('[data-test-id="image-link"]')

    cy.url().should('include', '/list')
  })
})
