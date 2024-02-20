describe("api testing",()=>{


it("Apprach1- Hard coded json object", ()=>{


  const requestBody={

        tourist_name: "Mike",
        tourist_email: "Jhon1256789@gmail.com",
        tourist_location: "Paris"
  }

         cy.request({
          method: 'POST',
          url: 'http://restapi.adequateshop.com/api/Tourist',
          body:requestBody

         })
         
         .then((response)=>{
             
           expect(response.status).to.eq(201)
           expect(response.body.tourist_name).to.eq("Mike")
           expect(response.body.tourist_email).to.eq("Jhon1256789@gmail.com")
           expect(response.body.tourist_location).to.eq("Paris")


         })

})

    it("Approach2- Dynamically Generating Json object",()=>{

          const requestBody={

                   tourist_name: Math.random().toString(5).substring(2),
                   tourist_email: Math.random().toString(5).substring(2)+"@gmail.com",
                   tourist_location: "Paris"

          }

          cy.request( 
            {


                       method: 'POST',
                       url: 'http://restapi.adequateshop.com/api/Tourist',
                       body:requestBody
          })

          .then((response) =>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(reponse.body.tourist_location).to.eq(requestBody.tourist_location)

   

          })

    })


    it.only("Approach3- Using Fixture", ()=>{


        cy.fixture('tourist').then((data)=>{

         const requestBody=data;


         cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body:requestBody
  
           })

     .then((response)  => {
        expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)

            expect(response.body).has.property('tourist_email',requestBody.tourist_email)
            expect(response.body).have.property('tourist_email',requestBody.tourist_email)

     })

    })


})
})
