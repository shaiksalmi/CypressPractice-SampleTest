describe('Navigation',()=>{


    it('Verifying the page',()=>{

   cy.visit("https://www.amazon.ca/");

   cy.title().should('eq',"Amazon.ca: Low Prices – Fast Shipping – Millions of Items");


   //cy.get('#nav_cs_bestsellers').click();

   cy.xpath("//a[text()='Best Sellers']").click();
  // cy.xpath("//a[text()='Best Sellers']").should('be.visible')

   cy.go('back'); //go back to home.

    //cy.title().should('eq',"Amazon.ca: Low Prices – Fast Shipping – Millions of Items");
   
   

    })
})