let assert = require("assert");
let mostProfitableDepartment = require("../mostProfitableDepartment");

describe('mostProfitableDepartment function' , function(){
    it('should return which of the departments are the most profitable' , function(){
         assert.deepEqual(mostProfitableDepartment([{department: 'hardware', sales: 4500}, {department: 'carpentry', sales: 5500}, {department: 'outdoor', sales: 1500}, {department: 'outdoor', sales: 2505}]), 'carpentry');
     });
     it('should return the department that makes the most profit' , function(){
        assert.deepEqual(mostProfitableDepartment([{department: 'hardware', sales: 4000}, {department: 'outdoor', sales: 1500}, {department: 'outdoor', sales: 2505}]), 'outdoor');
    });

    });
