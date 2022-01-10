/// <reference types="cypress" />
var faker = require('faker-br');
var faker1 = require('faker')



context('Funcionalidade cadastro de novo cliente', () => {



it('Deve fazer cadastro de novo cliente no site da loja C&A', () => {
    cy.visit('https://www.cea.com.br/login?returnUrl=https://www.cea.com.br/')
    cy.get('#open_pre-registration').click()   
    cy.get('#PCL_email').type(faker.internet.email())
    cy.get('#CL_Enviar_Pre').click()
    cy.get('#CL_CPF').type(faker.br.cpf())
    cy.get('#completeName').type(faker.name.findName())
    cy.get('#CL_telefone').type(faker1.phone.phoneNumber())
    cy.get('#lb-box-sexo > :nth-child(1) > label').click()
    cy.get('#CL_password_1').type('Adri12345')
    cy.get('#CL_password_2').type('Adri12345')
    cy.get('.content > .wrapper').click()
    cy.get('#CL_Enviar').click()
    cy.get('#np_token_recovery_coe').type('ABC123')
    cy.get('#btnCompleteRegister').click()

});



    
});