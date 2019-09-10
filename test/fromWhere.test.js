let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('fromWhere function' , function(){
    it('should take a car registration number as a parameter and return the town the car is from' , function(){
         assert.equal(fromWhere('CT'),"Some other place!");
        
    });
    it('should take a car registration number as a parameter and return the town where the car is from' , function(){
        assert.equal(fromWhere('CY'),"Bellville");
       
   });
   it('should take a car registration number as a parameter and return the townin which the car is from' , function(){
    assert.equal(fromWhere('CA'),"Cape Town");
   
});

});