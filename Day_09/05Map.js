//creating your own map method
//we have already know that The map() method takes in a callback function as its first argument.
// This callback function is executed for each element of the array, and takes up to three parameters:

//currentValue: The current element being processed in the array.
//index (optional): The index of the current element being processed in the array.
//array (optional): The array that the map() method was called upon.

//The callback function should return a new value for each element of the array,
//which will be added to the new array that is being created.

//example of a map() method

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((number) => {
  return number * number;
});

console.log(squaredNumbers);
//-------------------------------------------------------------------------------------------------------------------------
//understanding how to write the map
//defining the function in the array.prototype object

Array.prototype.myMap=function(callback){ //we have already discussed about the callback
  let newArray = []
 for(let i=0; i<this.length; i++){
   newArray.push(callback(this[i], i, this)) 
 }// The this keyword is used in this code to refer to the current array instance. 
 //When myMap() is called on an array, the this keyword refers to the array that the method is being called on.
 //this[i] = current element,
 //i = index,
 //this = array
 return newArray
}


const myMapNumbers = numbers.myMap((num)=>{
  return num
})

console.log(myMapNumbers)//[ 1, 2, 3, 4, 5 ]
