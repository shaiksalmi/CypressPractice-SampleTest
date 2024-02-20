describe("Checking UI elements",()=>{

    it("Checking Radio Buttons",()=>{

     cy.visit("https://artoftesting.com/samplesiteforselenium");

     //Visibility of radio buttons

     cy.get("input[id='male']").should('be.visible');

     cy.get("input[id='female']").should('be.visible');

     //Selecting radio buttons

     cy.get('input#female').check().should('be.checked')
     cy.get("#male").should('not.be.checked')

    })


    it("Checking Checkboxes",()=>{


        //Visibility of element

        cy.visit("https://artoftesting.com/samplesiteforselenium");

     cy.get("input[value='Automation']").should('be.visible');

     //Selecting single checkbox

     cy.get(".Automation").check().should('be.checked');

     //check all checkboxes

     cy.get("input[type='checkbox']").should('be.visible');

     cy.get("input[type='checkbox']").check().should('be.checked');

     //cy.get("input[type='checkbox']").check().should('be.not.checked');


    })


    it("selecting last checkbox",()=>{

        cy.visit("https://artoftesting.com/samplesiteforselenium")

        cy.get("input[type='checkbox']").last().check();


     })

})