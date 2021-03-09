// Write a JavaScript program to compute the sum and product of an array of integers.

function SumOfIntegers(array){
        sum = 0;
        product = 1;
        
    for(var i = 0 ; i < array.length  ; i++){
      sum += array[i] 
      product*= array[i]
  
    }
    // return sum;
    // return product;
}
let numbers = [1,2,3,4,6,4]
SumOfIntegers(numbers);
console.log("sum is : " + sum , "product is : " + product)
