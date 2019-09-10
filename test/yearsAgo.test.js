let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('yearsAgo function' , function(){
    it('should take in a year and return how many years it was ago' , function(){
        assert.equal(yearsAgo(2017), 2);

    });
    it('should return how many years it was ago from now' , function(){
        assert.equal(yearsAgo(1947), 72);

    });

});
