// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function checkForTwoNumbers (num1,num2){
    if (num1== 50 || num2 == 50){
        //  return true;
        console.log("one of the number is 50")
    }else if( num1 + num2 == 50){
        console.log("the sum of the numbers is 50")
    }else{
        return false;
    }
}

    
checkForTwoNumbers(20,30)
checkForTwoNumbers(50,10)
checkForTwoNumbers(10,50)
    



    