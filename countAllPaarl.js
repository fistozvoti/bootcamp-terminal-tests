module.exports = function(fun){
  var regNum1 = []
      var regNum = fun.split(', ')
      for(var i=0;i<regNum.length;i++){
      if(regNum[i].startsWith('CJ')){
      regNum1.push(regNum[i]);
      }
      }
      return regNum1.length;
}