function palindrome(str) {
    let newStr = str.replace(/[\s_\W]/g, '').toLowerCase();
    let revStr = newStr.split("").reverse().join('')
    if(revStr===newStr){
        return true
    }
    return false
  }
  
  console.log(palindrome("_eye"));
  //palindrome("A man, a plan, a canal. Panama") should return true.
  //palindrome("0_0 (: /-\ :) 0-0") should return true.