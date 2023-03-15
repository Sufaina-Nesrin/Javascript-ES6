function findLongestWordLength(str) {
    let arr =str.split(" ")
    let largest =""
    for(let i=0;i < arr.length; i++){
     if(largest.length<arr[i].length){
        largest = arr[i]
     }
    }
    
    return largest;
  }
  
  let largest = findLongestWordLength("The quick brown fox jumped over the lazy dog");
  console.log(largest)


  //Using Reduce Method
  function findLargestString(str) {
    let arr = str.split(" ");
    return arr.reduce((max, current) => current.length > max.length ? current : max, "");
  }

 let longest = findLargestString("The quick brown fox jumped over the laxy dog")
 console.log(longest)