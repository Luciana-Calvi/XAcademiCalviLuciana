Cypress.Commands.add('escribir', (selector,dato) => {

    cy.get(selector).type(dato)

 })

 Cypress.Commands.add('mi_click', (selector) => {

    cy.get(selector).click()

 })

 Cypress.Commands.add('asersion', (selector,mensaje) => {

    cy.get(selector).contains(mensaje)

 })
 Cypress.Commands.add('asersionFail', (selector) => {

    cy.get(selector).should('be.visible')

 })