//he filter() method is a built-in JavaScript function that is used to filter elements 
//from an array based on a given condition. The filter() method creates a new array 
//with all the elements that pass the test implemented by the provided function.

//here is an example
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

//console.log(evenNumbers); // Output: [2, 4, 6]
//----------------------------------------------------------------------------------------------------------------------

//create your own filter method
//learn how filter method works
Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
  for(let i=0; i<this.length; i++){
   if (Boolean(callback(this[i], i, this)) === true) {
        newArray.push(this[i]);
  }
  }
    
    return newArray;
  };

  const myFilteredArray = numbers.myFilter((num)=> {//here anonymus callback function is used
    return num%2===0

    
  })
  console.log(myFilteredArray)