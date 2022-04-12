require('cypress-xpath');

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://account.blip.ai/login');
    })

    it('Verify login with not registered credentials', () => {
      cy.get('#blip-login').should('be.disabled');
        cy.get('#email').type('emailnotregistered@gmail.com');
        cy.get('#password').type('passowrdnotregistered');
        cy.get('#blip-login').should('be.enabled');
        cy.get('#blip-login').click();
        cy.xpath('*//bds-toast-container/bds-toast').should('be.visible');
      })

      it('Check the behavior of the login screen when the data imputed in the Email and Password fields were different from the expected standard', () => {
        cy.get('#blip-login').should('be.disabled');
        cy.get('#email').type('email');
        cy.get('#password').type('123');
        cy.get('#blip-login').should('be.disabled');
        cy.xpath('*//form/fieldset/div[1]/div//div[.="This must be a valid e-mail"]').should('be.visible');
        cy.xpath('*//form/fieldset/div[1]/div//div[.="Value is too short"]').should('be.visible');
        cy.get('#blip-login').should('be.disabled');
        
      })
})