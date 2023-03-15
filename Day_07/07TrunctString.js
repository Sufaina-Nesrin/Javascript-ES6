//Truncate a string

//Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.
function truncateString(str, num) {
  
    if(num >= str.length){
      return str;
    }else{
        return str.slice(0,num)+"...";
    }
    
   
 
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))

  //OR WE CAN WRITE THE FOLLOWING WAY

  function TruncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
  }
  console.log(TruncateString("A-tisket a-tasket A green and yellow basket", 11));