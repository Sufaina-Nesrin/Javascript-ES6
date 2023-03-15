//Return Largest Numbers in Arrays

//when we use largestNum=0 to compare the the elements in the arr,it will affect when we compare with negative
//numbers in the array.therefore what we have done in the problem is assing the first element of every subarray
// to the variable by largestNum =a[i][0] after each inner loop,so thats the i gets 1,2,3.. and j gets 0
function largestOfFour(arr) {
    let largestArr=[];
    for(let i=0; i<arr.length; i++){
        let largestNum = arr[i][0]
        for(let j=1; j<arr[i].length; j++){
            if(largestNum < arr[i][j]){
               largestNum= arr[i][j] 
            }
             
        }
        largestArr.push(largestNum)
    }
    
    return largestArr;
  }
  
  let largestArr = largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
  console.log(largestArr)//[25, 48, 21, -3].

  //after there might be a doubt
  //is it possible to redeclaring the variable 'largestNum' with new value, having the let key word?
  //Reinitializing this variable with the first element of each subarray does not pose any 
  //problems because the previous value of largestNum is not needed in the next iteration.
  //if it is hard to understand ,you can declare on the top and change the variable inside the loop