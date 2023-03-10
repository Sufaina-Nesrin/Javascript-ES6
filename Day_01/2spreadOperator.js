
const arr = [13, 4 ,57 ,89]

//here we have to find the largest number,using Math.max()
console.log(Math.max(arr)); //consoles NaN

console.log(Math.max(...arr)) //consoles 89

//here is why 
//Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. 
//The spread operator makes this syntax much better to read and maintain.

//Remark......
//...arr returns an unpacked array. In other words, it spreads the array.
// However, the spread operator only works in-place, like in an argument to a function or in an array literal. 
//The following code will not work:

// const spreaded = ...arr;
// console.log(spreaded);