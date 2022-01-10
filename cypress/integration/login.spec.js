/// <reference types="cypress" />



context('Funcionalidade login', () => {

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
});

it('Deve fazer login', () => {
    cy.get('#username').type('emerson@gmail.com')
    cy.get('#password').type('EmersonSantiago123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.wpb_wrapper > .woocommerce').should('contain', 'Olá, emerson')

});

it('Deve exibir uma mensagem de erro ao fazer login com dados inválidos', () => {
    cy.get('#username').type('emersonr@gmail.com')
    cy.get('#password').type('EmersonSantiago123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Verifique novamente' )
});


    
});