describe('Hanling tabs', () => {

it('Approch1',()=>{

cy.visit('https://www.tutorialspoint.com/handling-child-tabs-with-cypress#:~:text=Cypress%20cannot%20directly%20handle%20a,attribute%20from%20the%20html%20code.'); //Parent tab

cy.get('.example >a').invoke('removeAttr','target').click();

cy.url().should('include','childurl');

//operations

cy.go('back'); //back to parent tab


})
})