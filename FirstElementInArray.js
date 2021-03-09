// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
// example - console.log(first([7, 9, 0, -2])); console.log(first([],3)); console.log(first([7, 9, 0],3)); 
// console.log(first([7, 9, 0, -2],6)); 



function first(arrayOfElements){
    return arrayOfElements.shift();
}


console.log(first([7, 9, 0, -2]));
 console.log(first([[],3])); 
 console.log(first([[7, 9, 0],3])); 
console.log(first([[7, 9, 0, -2],6])); 

