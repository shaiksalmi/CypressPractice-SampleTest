//CSS - Locotor-example.

describe('CSSLocators', () => {

    it('css locators', () => {

    cy.visit("http://www.automationpractice.pl/index.php");

    cy.get("#search_block_top").type("T-Shirts"); //using id

    cy.get("[name='submit_search']").click(); // using attribute

    cy.get(".search_query").type("T-Shirts"); // Using class


    cy.get("input.search_query[name='search_query']").type("T-Shirts") //using
    //tag class and attribute.

    //Checking text

    cy.get(".lighter").contains("T-Shirts"); //Assertion


    //Time Travel- we can go back to our executed scripts and check particular test cases.


        
    });
})