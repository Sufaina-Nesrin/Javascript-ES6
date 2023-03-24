
function binaryAgent(str) {
  let newStr = str.split(' ')// converting the str into arr of 8 bit binary digits
  let newArr = []

  for(let i=0; i<newStr.length; i++){
    //Here the parseInt func convert the string into its ASCII code
    //fromCharCode funct will convert the ASCII code to following letters
    newArr.push(String.fromCharCode(parseInt(newStr[i],2)))

  }
    
    return newArr.join("");
  }
  
  console.log(binaryAgent("01001000 01100101 01101100 01101100 01101111 00100000 01001001 01100001 01101101 00100000 01000100 01100101 01110110 01100101 01101100 01101111 01110000 01100101 01110010 00100000 01010011 01110101 01100110 01100001 01101001 01101110 01100001"))
  