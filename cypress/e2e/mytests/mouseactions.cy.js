import 'cypress-iframe'

require('@4tw/cypress-drag-drop')

describe("NouseHover Actions",()=>{

it.skip('MouseHover',()=>{

cy.visit('https://demo.opencart.com/');


cy.get('.nav > :nth-child(1) > .dropdown-toggle')
.trigger('mouseover').click();


cy.xpath("//a[text()='Mac (1)']").should('be.visible')

});

it.skip('Right click action',()=>{


    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

   // cy.get('.context-menu-one').trigger('contextmenu');

  // cy.xpath("//li[@class='context-menu-item context-menu-icon context-menu-icon-copy']")

  // .should('be.visible');

//Approch2

cy.get('.context-menu-one').rightclick();

   cy.xpath("//li[@class='context-menu-item context-menu-icon context-menu-icon-copy']")

   .should('be.visible');

});

it.skip('DoubleClick',()=>{


    cy.visit("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_elements")

    cy.frameLoaded('#iframe')
    
   .trigger('dbclick');


   //Approch2

   cy.get("").dbclick();

});


it.skip('Drag and Drop',()=>{

cy.visit("");

cy.get('').drag(); // to drag the element


});

it('scrolling',() => {

cy.visit("https://www.worldometers.info/geography/alphabetical-list-of-countries/")

cy.get('tbody tr:nth-child(78) td:nth-child(2)')
.scrollIntoView({duration:2000});

cy.get('tbody tr:nth-child(78) td:nth-child(2)')
.should('be.visible');

});


})







