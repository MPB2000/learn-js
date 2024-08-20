// Write a function isArrayEmpty that takes an array as an argument and returns true if
// the array is empty, and false if it is not.

function isArrayEmpty(arr) {
    // if (arr.length == 0)
    //     return true;
    // else 
    //     return false;

    return arr.length == 0; 
}
console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false