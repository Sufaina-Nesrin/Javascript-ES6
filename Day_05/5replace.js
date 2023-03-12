//You can search and replace text in a string using .replace() on a string. 
//The inputs for .replace() is first the regex pattern you want to search for. 
//The second parameter is the string to replace the match or a function to do something.

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
console.log(wrongText.replace(silverRegex, "blue"));//returns The sky is blue


//you can also access capture groups in the replacement string with dollar signs ($).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); //it will swap the words each other


//tp remove the space from the start and end of the string
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, ""); 