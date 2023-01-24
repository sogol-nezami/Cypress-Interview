// ***********************************************
// This example commands.js shows you how to
// create various custom commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- open demoqa.com URL command --
Cypress.Commands.add('openUrl',() => {
  cy.visit(Cypress.config().baseUrl)
})