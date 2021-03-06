/// <reference types="cypress" />

describe('Funcionalidade Pagina de Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it.only('Deve adcionar um produto ao carrinho', () => {
        var quantidade = 1

        cy.get('[class="product-block grid"]')
            .contains('Aero Daily Fitness Tee').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Yellow').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' ,1)



    });


});