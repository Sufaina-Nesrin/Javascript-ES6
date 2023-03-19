//The every() method in JavaScript is a built-in array method that checks if every element 
//in an array passes a specified test. It returns a Boolean value true if all the elements 
//in the array pass the test, and false if at least one element fails the test.

const numbers = [2, 4, 6, 8, 10];
const isEven = (number) => number % 2 === 0;

const allEven = numbers.every(isEven);
console.log(allEven); // Output: true



//to check every numbers in the array is positive

function checkPositive(arr) {
    
  return arr.every((number)=>{
   return number > 0
  })
  
    
  }
  
  console.log(checkPositive([1, 2, 3, -4, 5]));//return false
  //---------------------------------------------------------------------------------------------------------------
//The some method works with arrays to check if any element passes a particular test. 
//It returns a Boolean value - true if any of the values meet the criteria, false if not.

  function checkPositive(arr) {
    
  return arr.some((num)=>{
    return num>0
  })
  
  }
  
  console.log(checkPositive([1, 2, 3, -4, 5]));