module.exports = function(list, threshold){
  var greaterThan = [];
      for(var i=0; i<list.length; i++){
      if(list[i].qty > threshold){
      greaterThan.push(list[i])
        
      }
      }
      return greaterThan;
}