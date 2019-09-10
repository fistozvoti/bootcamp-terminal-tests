module.exports = function (mostProfit) {
    var mostProfitable = 0;
    var mostProfitableDept = '';
    var departmentProfit = {};
    for (var i = 0; i < mostProfit.length; i++) {
        if (departmentProfit[mostProfit[i].department] === undefined) {
            departmentProfit[mostProfit[i].department] = 0;
        }
        departmentProfit[mostProfit[i].department] += mostProfit[i].sales;
    }
    for (var x in departmentProfit) {
        if (departmentProfit[x] > mostProfitable) {
            mostProfitable = departmentProfit[x]
            mostProfitableDept = x;
        }
    }
    return mostProfitableDept;
}