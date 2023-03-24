//Here is the function filter the array with the particular function passed as a callback

function dropElements(arr, func) {
   let newArr = arr.filter(func)
    return newArr;
  }
  
  console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));// return [1, 1]


  //next we return a new array by the function until the function returns false

  function DropElements (arr, func){
    for(let i=0; i<arr.length; i++){
        if(!func(arr[i])){
            arr.splice(i,1);
            i--
        }else{
            return arr
        }

    }
    return arr;
  }

  console.log(DropElements([0, 1, 0, 1], function(n) {return n === 1;}))// returns [1, 0, 1]