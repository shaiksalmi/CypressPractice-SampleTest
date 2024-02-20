describe('My test1', () => {

    it('just launching a web page', () => {  

      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

      cy.title().should('eq','OrangeHRM');

    })
})

//to run in headless mode
//1. npx cypress open
//2. npx cypress run --spec cypress/e2e/mytests/test.cy.js

////To run on a specific browser:

//1. npx cypress run --browser chrome

//////To run in headed mode:

//1. npx cypress run --browser chrome --headed
