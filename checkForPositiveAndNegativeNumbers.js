// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

function checkForPositiveAndNegativeNumbers(num1 , num2){
    if(num1 < 0 && num2 > 0){
        console.log("num1 is a negative number and num2 is a positive number.")
        return true
    }else if ((num1> 0 && num2 <0)){
        console.log("num1 is a positive number and num2 is a negative number.")
        return true
    }
    else{
        return false;
    }

}

checkForPositiveAndNegativeNumbers(-2,4);
checkForPositiveAndNegativeNumbers(2,-4);

