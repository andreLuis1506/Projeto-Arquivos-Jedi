// https://docs.cypress.io/api/introduction/api.html
import mock from '../../src/mock/people.json'

describe('My First Test', () => {
    beforeEach( () => {
        cy.visit('/people')
    })

    it('Se pagina de listagem exibe dados', () => {
        cy.contains('.list-card-title', 'Luke Skywalker')
    })

    it('Se a pagina esta ativa', () => {
        cy.get("#nav-people").should('have.class', 'active')
    })

    it('Se busca funciona', () => {
        cy.get('#search').type('Luke Skywalker')
        cy.intercept('GET', '/people?search=Luke-Skywalker',mock).as('search')
        cy.wait('@search')
        cy.contains('.list-card-title', 'Luke Skywalker')
    })

    it('Abre pagina de detalhe correta', () => {
        cy.get('#search').type('Luke Skywalker')
        cy.contains('.list-card-title', 'Luke Skywalker').click()
        cy.contains('h1', 'Luke Skywalker')
    })
})
