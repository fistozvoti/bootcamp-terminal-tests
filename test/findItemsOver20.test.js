let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('findItemsOver20' , function(){
    it('should return all the products that have a quantity higher than 20' , function(){
        assert.deepEqual(findItemsOver20([{"name":"pears","qty":37},{"name":"pears","qty":19},{"name":"bananas","qty":27}]), [{"name":"pears","qty":37},{"name":"bananas","qty":27}]);

    });
    it('should return all the products that have a quantity higher than threshold' , function(){
        assert.deepEqual(findItemsOver20([{"name":"pears","qty":17},{"name":"pears","qty":29},{"name":"bananas","qty":13}]), [{"name":"pears","qty":29}]);

    });

});