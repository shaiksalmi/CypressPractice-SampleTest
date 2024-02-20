
import 'cypress-iframe'

describe('iframe', () => {


    it.skip('testing iframe',()=>{


        cy.visit('https://www.geekdashboard.com/tools/iframe-tester/')

      let iframe = cy.get("#iframe-content")




      .its('0.contentDocument.body')
       .should('be.visible')
      .then(cy.wrap);
    

      iframe.clear().type("welcome");

    })


    it.skip('testing eg iframe2',()=>{

        cy.visit('https://the-internet.herokuapp.com/tinymce')
        
        

       let iframe=cy.get('#mce_0_ifr')

       .its('0.contentDocument.body')
      .should('be.visible')
     .then(cy.wrap);
    iframe.clear().type('Hey');

    cy.wait(5000);

    cy.get('[aria-label="Bold"]').click();

    })


    it('testing eg iframe3',()=>{

      cy.visit('https://the-internet.herokuapp.com/tinymce')
      
      

     cy.frameLoaded('#mce_0_ifr')

     cy.iframe('#mce_0_ifr')
    
     .clear().type('hell0!')
    

  

  })

    
});