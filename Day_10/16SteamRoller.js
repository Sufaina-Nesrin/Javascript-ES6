
//Flatten a nested array. You must account for varying levels of nesting.
//here the output should be one dimensional array 
function steamrollArray(arr) {
  
 //Declare an empty array newArr to store the flattened values.
   let newArr = [] 

//Loop over the contents of the array arr using a for loop.
 for(let i=0; i<arr.length; i++){

//Check if the current element arr[i] is an array using the Array.isArray() method.
// If it is an array, call the steamrollArray function recursively with the current
// element and spread the returned value into the newArr. This will flatten the nested
// array and add the flattened values to the newArr.  
  if(Array.isArray(arr[i])){
    newArr.push(...steamrollArray(arr[i]))
   

//If the current element is not an array, simply push it into the flattenedArray.
  }else{
    newArr.push(arr[i])
  }


 }
  return newArr;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));