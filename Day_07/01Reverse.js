//Reverse A String

function reverseString(str) {
    let newStr = ""
    
    let i=0
    for(i=str.length-1;i>=0;i--){
      
      newStr+=str[i];
   
  
    }
    return newStr;
  }
console.log(reverseString("hello"));//consoles olleh

//another method

let string = "Hello World"
let reverse = string.split("").reverse().join("")
console.log(reverse)