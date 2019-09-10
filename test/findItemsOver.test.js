let assert = require("assert");
let findItemsOver = require("../findItemsOver");


describe('findItemsOver' , function(){
    it('should return products that have a higher quantity than the threshold' , function(){
        assert.deepEqual([{"name":"apples","qty":40},{"name":"bananas","qty":23},{"name":"apples","qty":37}], [{"name":"apples","qty":40},{"name":"bananas","qty":23},{"name":"apples","qty":37}]);
    });
    it('should return products that have a higher quantity than 20' , function(){
        assert.deepEqual([{"name":"apples","qty":40},{"name":"bananas","qty":23},{"name":"apples","qty":37}], [{"name":"apples","qty":40},{"name":"bananas","qty":23},{"name":"apples","qty":37}]);
    });

});