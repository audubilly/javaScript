// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

function sumOfNumbers (num1 , num2){ 
    if( num1 == num2){
         let sum = num1 + num2;
         console.log(3 * sum);
    //    return 3 * sum;

    }else{
        console.log(num2 + num1)
        // return num2 + num1;
    }

}
sumOfNumbers(12,2);
