//Remove all falsy values from an array. Return a new array; 
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//the  Boolean() of method returns false when it calls with false values like false,null,undefined etc....

function bouncer(arr) {
    //if we try to access the i from 0 to arr.length it will not return the result we think
    //because whenever we splice the arr the length of the array and position get changed
   
    for(let i=arr.length-1; i>=0; i--){   
    if(Boolean(arr[i])===false){
        arr.splice(i,1)
    }
}
    
    return arr
  }
  console.log(bouncer([7, "ate", "", false, 9]));
  console.log(bouncer(["a", "b", "c"]));
 ;//here is the code of modifying within the array
  

  // return array by not mutating the orginal array

  function removeFalsy(arr){
    let newArr = [];
    for(let i=0; i<arr.length; i++)
    if(Boolean(arr[i])){
        newArr.push(arr[i]);
    }
    return newArr
  }
  console.log(removeFalsy([false, null, 0, NaN, undefined, ""]))
