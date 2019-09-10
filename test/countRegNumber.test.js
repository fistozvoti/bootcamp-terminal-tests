let assert = require("assert");
let countRegNumber = require("../countRegNumber");


describe('countRegNumber' , function(){
    it('should take in a string parameter and return the number of registration numbers in the string' , function(){
        assert.equal(countRegNumber('CA 23433, CK 65656, CF 67795, GP 55555, MP 343, AF 676546'), 6);

    });
    it('should return the total of registration numbers that are in the string' , function(){
        assert.equal(countRegNumber('CY 523519,CJ 812328, CA 42665, AA 12 RT GP'), 4);

    });

});
