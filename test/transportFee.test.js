let assert = require("assert");
let transportFee = require("../transportFee");

describe('transportFee' , function(){
    it('should return the right price based on the shifts' , function(){
        assert.equal(transportFee("morning"), "R20");

    });
    it('should return the right price based on the shifts' , function(){
        assert.equal(transportFee("default"), "free");

    });it('should return the right price based on the shifts' , function(){
        assert.equal(transportFee("afternoon"), "R10");

    });


});
