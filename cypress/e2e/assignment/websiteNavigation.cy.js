
describe('Cypress.io Website testing',()=>{

    beforeEach(()=>{

       cy.visit("https://www.cypress.io/");
   })


it('User visiting the website and scroll to Loved by oss',()=>{

cy.contains('Loved by OSS, trusted by Enterprise')
.scrollIntoView({offset: { top: -100 } })//.should('be.visible')
cy.xpath("//div[normalize-space()='Weekly downloads']")
.should('be.visible');
    })


it('User able to click on company and see About Cypress ',()=>{

    cy.get('#dropdownCompany').trigger('mouseover')
    cy.contains('About Cypress').click();

})

it('User able to install cypress and copy text',()=>{

    
    cy.viewport(1024, 768);

   cy.xpath("//button[normalize-space()='Install']").click();

   cy.get("span[class='whitespace-nowrap !font-secondary']").click()


   cy.wrap(
    Cypress.automation('remote:debugger:protocol', {
        command: 'Browser.grantPermissions',
        params: {
          permissions: ['clipboardReadWrite', 'clipboardSanitizedWrite'],
          origin: window.location.origin,
        },
    }),
);

   cy.window().then((win) => {
    win.navigator.clipboard.readText().then((text) => {
const copy = 'npm install cypress --save-dev'
expect(text).to.eq('npm install cypress --save-dev');
    });
  });

   
   })

   
   it('User able to click on product and visual revoiew',()=>{

    
    cy.get('#dropdownProduct').trigger('mouseover');
    cy.xpath("//span[normalize-space()='Visual Reviews']").click();

     

   })


   it('User able to click on product then smart orchestration and then scroll to test analystics',()=>{

    

    cy.get('#dropdownProduct').trigger('mouseover');
    cy.xpath("//span[normalize-space()='Smart Orchestration']").click()


     cy.xpath("//p[normalize-space()='Test Analytics']")

    .scrollIntoView({offset: { top: -150 } })

     cy.get('.icon-dark').should('be.visible');

    
    
})
    
    

})