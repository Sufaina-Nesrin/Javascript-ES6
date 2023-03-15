//Repeat a String Repeat a String
//Repeat a given string str (first argument) for num times (second argument). 
//Return an empty string if num is not a positive number., do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    let newStr = ""
    if(num < 0){
        newStr = " "
    }
    for(let i =0; i<num; i++){
        for(let j=0; j<str.length; j++){
          newStr += str[j]
        }
    }
    return newStr
  }
  
console.log(repeatStringNumTimes("abc", 3)) ;

//but the above method is not the good way.its complexity level is high because of the two loops
//here is another way by using one loop


//Using 1 loop
function repeatString(str,num){
    let newStr = ""
    if(num>0){
        for(let i=0; i<num; i++){
            newStr +=str
        }
    }
    return newStr
}
console.log(repeatString("123",3));


//Using Recursion
//its the better method other than loops

function RepeatString(str,num){
    let newStr = ""
    if(num<=0){
        return newStr
    }else{
        return str+RepeatString(str,num-1)
    }
}
console.log(RepeatString("hello",3))

