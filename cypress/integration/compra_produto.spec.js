/// <reference types="cypress" />

context('Funcionalidade inserir produto no carrinho de compras', () => {



    it('Deve selecionar um produto e inseri-lo no carrinho de compras', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        cy.get('.product-block').first().click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear()
        cy.get('.input-text').type(1)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 1)



    });

        
});