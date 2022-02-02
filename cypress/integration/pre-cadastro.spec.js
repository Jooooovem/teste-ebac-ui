/// <reference types="cypress" />

describe('Funcionalidade Pré Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });



it('Deve completar o pré cadastro com sucesso', () => {
    cy.get('#reg_email').type('maria@teste.com')
    cy.get('#reg_password').type('Maria167761*')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type('Rafael')
    cy.get('#account_last_name').type('Crisov')
    cy.get('.woocommerce-Button').click()



});


});