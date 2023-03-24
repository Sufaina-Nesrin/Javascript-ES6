//Find the missing letter in the passed letter range and return it.

//If all letters are present in the range, return undefined.

//charCodeAt() and String.fromCharCode() are methode used to convert to and from the ASCII values
//google the methods and read the documentation

function fearNotLetter(str) {
   
  for(let i=0; i<str.length; i++){
     //console.log(str.charCodeAt(i))
    if(str.charCodeAt(i+1)-str.charCodeAt(i)!==1&&i+1<str.length){//checking the difference between two adjacent value
        //is not equal to 1 ,so that there is a number that missed in the string
   return String.fromCharCode(str.charCodeAt(i)+1)//collecting the alphabet and returning it
    }
  }
  }
console.log(fearNotLetter("bcdf"));
