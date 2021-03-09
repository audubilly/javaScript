// Write a function addWithSubcharge that adds two amounts with subcharge. For each amount less than or equal to 10, the subcharge is 1. 
// For each amount greater than 10, the subcharge is 2.

function addWithSubcharge(amount1, amount2){
    if(amount1 <= 10 ){
            amount1 = 1;
      }else {
        amount1 = 2;
        }

   if (amount2 <= 10){
            amount2 = 1;
        }else{
            amount2 = 2;
        }    
    var sum = (amount1 + amount2)
    console.log(sum)
    return(sum)
   
}    
   
addWithSubcharge(17,17)
    

    