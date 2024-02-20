describe("This is my sample test", ()=>{

it('does not do match', ()=>{

    expect(true).to.equal(true)
})

})
//just using function instead of arrow.

describe("This is my sample test", function(){
    
    it('Does not match', function(){

        expect(true).to.equal(true)
    } )
})