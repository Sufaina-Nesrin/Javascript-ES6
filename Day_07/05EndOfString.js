//confirm the end
//Check if a string (first argument, str) ends with the given target string (second argument, target).

//Using Slice Method 
//The slice method is a built-in method in JavaScript that allows you to extract a section of a string, 
//array, or other data structure by specifying the starting and ending positions. 

function confirmEnding(str, target) {

  return str.slice(str.length - target.length)===target;
  //first of all we have to find the starting index of the target,so that we have subtracted the target length 
  //from the string length it returns a number where the target starts using slice method we exctract 
  //the string starting from that index,then we have got the target and check is it correct or not and returns the boolean value
}
console.log(confirmEnding("He has to give me a new name", "name"));//returns true


//Using slice Method Once Again
function confirmTheEnd(str,target){
 return str.slice(-target.length)===target; //If a negative number is provided as the first parameter to slice() , 
 //the offset is taken backwards from the end of the string.
}
console.log(confirmTheEnd("Abstraction", "action")); //returns true



//Using Regular Expressions
function confirmTheEnding(str,target){
  //we cannot write like thisn:- const strReg = /target$/,because here target is a variable not substring
  //what we can actually do is to create a RegExp constructor
  let strRegex = new RegExp(target +"$");
  return strRegex.test(str);
}
console.log(confirmTheEnding("Open sesame", "same"));//returns true
