let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('isWeekday function' , function(){
    it('should take in a string parameter to find out if the parameter passed in is not a day of the week, but a weekend day' , function(){
        assert.equal(isWeekday('S'),false);
    });
    it('should take in a string parameter to find out if the parameter passed in is a day of the week, not a weekend day' , function(){
        assert.equal(isWeekday('M'),true);

    });


});