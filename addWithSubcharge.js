// Write a function addWithSubcharge that adds two amounts with subcharge. For each amount less than or equal to 10, the subcharge is 1. 
// For each amount greater than 10, the subcharge is 2.

function addWithSubcharge(amount1, amount2){
    let sum = amount1 + amount2;
    if( sum <= 10){
     let subcharge = 1; 
     sum += subcharge;    
    }else{
        let subcharge = 2;
        sum += subcharge;
    }
    console.log(sum)
    return(sum)
   
}    
   
addWithSubcharge(4,4);
addWithSubcharge(4,10);
addWithSubcharge(10,10);
    

    