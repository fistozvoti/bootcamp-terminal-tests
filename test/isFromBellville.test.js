let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('isFromBellville function' , function(){
    it('should return true if a registration number is for Bellville' , function(){
        assert.equal(isFromBellville('CY 234'), true);
    });
    it('should return false if a registration number is not for Bellville',function(){
        assert.equal(isFromBellville('CA 615243'), false);
    });

});
