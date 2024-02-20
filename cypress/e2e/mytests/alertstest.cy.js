describe('Alerts', ()=>{

    //1. Javascript alert: It will have some text and an 'OK' button.

    it.skip('Js alert',()=>{


        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html');

       cy.xpath("//input[@value='Show alert box']")
       .should('be.exist');

       cy.xpath("//input[@value='Show alert box']").click();

       cy.on('window:alert',(t)=>{

        expect(t).to.contains('I am an alert box');

       })
 //alert window automatically closed by cypress
       cy.get('#alertexplanation')
       .should('have.text', 'You triggered and handled the alert dialog')
    })

       
       
    


    //2. Javascript Confirm Alert: It will have some text with 'OK' and


    it.skip('Js confirm alert',()=>{

     cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html");
     
     cy.xpath("//input[@value='Show confirm box']").click();

   cy.on('window:confirm',(t)=>{
      
     expect(t).to.contains('I am a confirm alert');

 })

 cy.get('#confirmreturn')
 .should('have.text','true' );

    }) 
    // 3.'Cancel' buttons.
    ///3. Javascript Prompt Alert: It will have some text with a text box for
    //user input along with 'OK'

    it.skip('Js confirm alert',()=>{

        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html");
        
        cy.xpath("//input[@value='Show confirm box']").click();
   
      cy.on('window:confirm',(t)=>{
         
        expect(t).to.contains('I am a confirm alert');
   
    })
   
    cy.on('window:confirm',()=> false); 

    //Cypress closes alert window by using cancel button.
    
    cy.get('#confirmreturn')
    .should('have.text','false');
   
       }) 

    

    //4. prompt alert

    it.skip('Js prompt alert',()=>{

        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html");
        
        
   
      cy.window().then((win)=>{

        cy.stub(win,'prompt').returns('hey');

      })
         
    cy.xpath("//input[@id='promptexample']").click();
   
    
    cy.get('#promptreturn')
    .should('have.text','hey');
   
       }) 


//5.Authenticated Window

it('Authenticated alert', ()=>{

//approch1

cy.visit("somethining", { auth: {username: "admin", password: "admin"}})

cy.get("locator").should('have.contain', "congratulations");

//or

cy.visit("https://admin:admin@the-internet.com/")
 


})

    })