/// <reference types="cypress" />

context('Funcionalidade cadastro de cliente', () => {



    it('Deve cadastrar o cliente na Loja EBAC', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#reg_email').type('emersoncsantiago@gmail.com')
        cy.get('#reg_password').type('Emerson123')
        cy.get(':nth-child(4) > .button').click()
    });

    it('', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get(':nth-child(4) > .button').click()
        cy.get('#account_first_name').type('Emerson')
        cy.get('#account_last_name').type('Santiago')
        cy.get('.woocommerce-Button').click()

    });


});