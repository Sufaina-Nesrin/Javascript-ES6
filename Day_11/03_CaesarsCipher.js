function rot13(str) {
   let arr = []
    let newStr = str.split('');
    console.log(newStr)
    for(let i=0; i<newStr.length; i++){
        if(/[A-Za-z]/.test(newStr[i])) {
      if(newStr[i].charCodeAt(0)+13<=90){
            newStr[i]= (newStr[i].charCodeAt(0))+13
        }else{
         let rem = 13-(90 - newStr[i].charCodeAt(0)) 
         newStr[i] = 64 +rem;
        }
    }else{
        newStr[i] = newStr[i].charCodeAt(0)
    }
        arr.push(String.fromCharCode(newStr[i]))
        // console.log(newStr[i])
    }
    return arr.join('')
  }
  
  console.log(rot13("SERR PBQR PNZC"));
   let z = ' '
//   let a = 'A'
   console.log("Space"+z.charCodeAt(0))
   console.log('space'+String.fromCharCode(32))