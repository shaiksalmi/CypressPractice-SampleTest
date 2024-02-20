///before

//It will be executed before starting the the 'all the it blocks'.
// And it will be executed only once.

///after

//it will be exected after completion of all the 'it blocks' in describe
// it will be executed only once.

///beforeEach

//It will be executed multiple times, before starting each and every 'it block'.

///AfterEach

//It will be executed multiple times, after completion of every 'it block'.

describe('My TestSuite', ()=>{


    before(()=>{

        cy.log("***** Lauch app *****");
    })

after(()=>{


    cy.log("****** Launch app ******")

})

    it('Search',()=>{
        

       cy.log("******** searching ********");

    })


    beforeEach(()=>{

cy.log("******* Login ****** ");

    })


    afterEach(()=>{


    cy.log("****** logout ********");

    })

    it('advanced search', ()=>{

        cy.log("***** advanced searching *****");
    })

    it('Listing Products',()=>{

         cy.log("***** Listing Products  *****");

    })

})