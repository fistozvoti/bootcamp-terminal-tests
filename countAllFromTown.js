module.exports = function(reg, location){
    var num = [];
    var list = reg.split(",");
    for(var i=0; i<list.length; i++){
      var regNum = list[i].trim()
    if(regNum.startsWith(location)){
    num.push(regNum)
      
    }
    }
    return num.length;
}