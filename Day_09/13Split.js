//The split method splits a string into an array of strings. It takes an argument for the delimiter, 
//which can be a character to use to break up the string or a regular expression. For example, 
//if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, 
//you get an array of each character in the string.

//Here is an example
 console.log("Hello World".split(" "));// output [ 'Hello', 'World' ]
 console.log("Hello World".split(""));// output ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

 //here is the function to print the array of words without space and punctuations
 function splitify(str) {
  
  let splitString = str.split(/\W/)// not alphabets or numbers
  return splitString
   
  }
  console.log(splitify("Hello World,I-am code"));



