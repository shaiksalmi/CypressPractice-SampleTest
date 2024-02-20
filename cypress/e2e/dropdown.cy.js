describe('handle dropdown', () => {


    it.skip('Dropdown with select', ()=>{

      cy.visit("https://www.zoho.com/crm/crmplus/request-demo.html");

      cy.get('#zcf_address_country')
      .select('Italy')
      .should('have.value','Italy')

    })
    it.skip('Dropdown without select', ()=>{

        cy.visit("https://www.amazon.ca/");

        cy.get('#select2-billing_country-container').click();

        cy.get('.select2-search_field').type('Italy').type('{enter}');

        cy.get('#select2-billing_country-container')
        .should('have.text','Italy');
  
        
  
      })

//Auto suggestion dropdown.

      it('auto suggested dropdown',()=>{

       cy.visit("https://www.wikipedia.org/");

       cy.get('#searchInput').type('Delhi');

       cy.get('.suggestion-link').contains('Delhi University').click();




      })
});