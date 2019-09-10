let assert = require("assert");
let regCheck = require("../regCheck");

describe('regCheck function' , function(){
    it('should check if a registration number is for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck('CY 5674 GP', 'GP'), true);

    });
    it('should check if a registration number is not for for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck('JK 565656 ',), false);

    });

});
