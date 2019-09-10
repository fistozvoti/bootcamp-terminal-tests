let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('totalPhoneBill function' , function(){
    it('should calculate the total bill for the data given in the string' , function(){
        assert.equal(totalPhoneBill('call, call'), 'R5.50');

    });
    it('should calculate the total bill for the data given in the string' , function(){
        assert.equal(totalPhoneBill('sms, sms, sms'), 'R1.95');

    });
    it('should calculate the total bill for the data given in the string, per call' , function(){
        assert.equal(totalPhoneBill('call'), 'R2.75');

    });
    it('should calculate the total bill for the data given in the string, per sms' , function(){
        assert.equal(totalPhoneBill('sms'), 'R0.65');

    });

});