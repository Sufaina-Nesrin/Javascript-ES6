//You are given two arrays and an index.
//Copy each element of the first array into the second array, in order
//Begin inserting elements at index n of the second array.

function frankenSplice(arr1, arr2, n) {
    let arr = [...arr2]
     arr.splice(n,0,...arr1) 
     //console.log(arr2)
    return arr;
  }
  //console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


  //Using slice AND splice
  function copyingArr(arr1, arr2, n){
    let arr = arr2.slice()// copying arr2 to arr without changing arr2
    console.log(arr)
    arr.splice(n,0,...arr1) //changes arr to the changes mentioned
    
    return arr;

  }
  console.log(copyingArr([1, 2, 3], [4, 5, 6], 1))