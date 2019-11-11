/// <reference types="Cypress" />

const auth0 = require('auth0-js');
Cypress.Commands.add('login', () => {
    Cypress.log({
      name: 'loginViaAuth0',
    });
  
    cy.request({
      method: 'POST',
      url: 'https://shift-creation-dev.eu.auth0.com/oauth/token',
      body: {
        grant_type: 'password',
        username: 'sctest@shiftcreationtest.onmicrosoft.com',
        password: 'Hallo!!!=',
        audience: 'https://shiftcreationdev.azurewebsites.net',
        scope: 'openid profile',
        client_id: 'hUZR0LNkBrxvSzg6jq72an53wznIBIVw',
        client_secret: 'WKQKcj3wUC3Loe6E34i7h5zhRKCiW-OWyOPqNfDQN7S5wgcZScl3ty7-gsuSHYn0',
      },
    })
    .then((resp) => {
      window.localStorage.setItem('access_token', resp.body.accessToken)
      window.localStorage.setItem('expires_at', 10000 + new Date().getTime().toString())

    })
  });

  
  
  describe('Cypress first test', () => {
        it('should login and go to the booking page', () => {
         cy.login()
         cy.wait(1000)
         cy.visit('https://shiftcreationtest-waad-dev.ortecapps.com/ortec-workforce/shift-creation/#/login')
         cy.get('#PRT_login-btn').click()
         //cy.get(':nth-child(1) > .cdk-column-demandCovered > .unplanned-period').click()
         //cy.get('.select-period-footer > .bol-button-solid').click()
         //cy.get('.mat-form-field-infix').click()
         //cy.wait(2000)
         //cy.get('#mat-option-4 > .mat-option-text').click()
         //cy.wait(1000)
         //cy.get('form.ng-touched > .bordered-step-container > :nth-child(4) > .bol-button-solid').click()
         //cy.wait(1000)
         //cy.get('.mat-slider-thumb-label-text').click()
         //cy.get('.mat-slider').click()
         //cy.wait(1000)
         //cy.get('.bol-button-spinner > .bol-button-solid').click()
         cy.wait(5000)
         cy.get('.optimizing > .spinner-cell').should('be.visible')
         
         //cy.wait(1000)
         //cy.visit('https://shiftcreationtest-waad-dev.ortecapps.com/ortec-workforce/shift-creation/#/home')
      })
    })