//one-dimensional arry initilization
let array = ["helen", true, 12 ,undefined, null ];


//two-dimensional array
let complexArray = [
    [{one: 1,two: 2},{three: 3,four: 4}],[{ a: "a", b: "b" },{ c: "c", d: "d"}] 
];


//Access an Array's Contents Using Bracket Notation
let element = array[0];
console.log(element) ;//consoles helen


//set an index to a value using the same notation
array[1] = false;
console.log(array); //consoles [ 'helen', false, 12, undefined, null ]


//Add Items to an Array with push() and unshift()
let myArray = [3, 4, 5, 6];
myArray.push(7, 8); // add elements to the end of the array [3, 4, 5, 6, 7, 8]
myArray.unshift(1, 2); //add elemrnts to the beginning of the array [1, 2, 3, 4, 5, 6, 7, 8]
console.log(myArray)


//Remove Items from an Array with pop() and shift()
let arr = ['challenge', 'is', 'not', 'complete'];
//we can also assingn the popped or shifted element to a variable
let popped = arr.pop();
let shifted = arr.shift();
console.log("shifted:"+shifted+",popped:"+popped)


//Remove Items Using splice()
//splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.
let arr_1 = ["javascript", "c++", "java", "python", "php"];
arr_1.splice(0, 2);// the first parameter shows the position and the second shows how many element to be removed
console.log(arr_1);//consoles [ 'java', 'python', 'php' ]


//Add Items Using splice()
let numbers = [1, 2, 5, 6, 7]
numbers.splice(2, 0, 3,4) // the parameter 2 is the position and 0 is the number of elements to be deleted, 3,4 are the numbers to be inserted
console.log(numbers)
// we can delete and insert elements to the array by replacing second parameter by another no like 1,2,3.....


//Copy Array Items Using slice()
let weather = ['summer', 'winter', 'rainy', 'autumn', 'spring']
let newWeather = weather.splice(0,4);
console.log(newWeather);
console.log(weather)
//wait, what you thinking now ,then what is removing using slice method right?
//let me explain the both,
//here weather.splice(0,4) removes the elements from 0-4 not include the 4th element
//what is happening when we assign the weather.splice to another variable, the removed elements assign to a the new
//variable


//Copy an Array with the Spread Operator
let pets = ["fish", "cat", "dog", "parrot"];
let copyPets = [...pets];//copy the exactly same of the pets array
console.log(copyPets);


//Combine Arrays with the Spread Operator
let thatArray = [1, 2, 3];
let thisArray = [...thatArray, 4, 5, 6];
console.log(thisArray)//will console [ 1, 2, 3, 4, 5, 6 ]


//Check For The Presence of an Element With indexOf()
let fruits = ['apple', 'orange', 'pears', 'grapes'];
console.log(fruits.indexOf('apple'));//returns 0
console.log(fruits.indexOf('mango'));//returns -1 if the element does not exist on the array.

