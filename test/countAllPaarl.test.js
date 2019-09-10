let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");


describe('countAllPaarl', function () {
    it('should return the number of registration numbers in the string for Paarl', function () {

        assert.equal(countAllPaarl('CJ 432432, CA 4324, CJ 4324324'), 2);

    });
    it('should return how many registration numbers from Paarl are in the string', function () {

        assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'), 3);

    });

});