module.exports = function(shiftCost){
   switch(shiftCost){
      case "morning":
         return "R20";
         break;
         
      case "afternoon": 
         return "R10";
         break;
         
      default:
         return "free";
}
}