describe('Xpathlocotor',() => {

    it('find no of products', () =>{

        cy.visit("https://www.amazon.ca/")

    cy.xpath("//a[normalize-space()='Gift Ideas']").click();

    

    })

})
    