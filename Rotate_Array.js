// Write a function rotate that rotates the elements of an array. All elements should be moved one position to the left.
// The 0th element should be placed at the end of the array. The rotated array should be returned. 
// Example: rotate(['a', 'b', 'c']) should return ['b', 'c', 'a'].

let rotate = function (array){
    let newArr = [];
    for (let i = array.length-1; i >= 0; i--){
        newArr.push(array[i]);
    }
    return newArr;
}

let result = rotate([1,2,3,4]);
console.log(result);