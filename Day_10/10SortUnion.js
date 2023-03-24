//Write a function that takes two or more arrays and returns a new array of unique values in the order 
//ascending order of arrays.

function uniteUnique(...arr) {//here we get the three arrays in two dimensional way
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (!result.includes(arr[i][j])) {// checking the result array not containg the current value to avoid duplication
          result.push(arr[i][j]);
        }
      }
    }
    return result.sort((a,b)=>a-b);
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // returns [ 1, 2, 3, 4, 5 ]