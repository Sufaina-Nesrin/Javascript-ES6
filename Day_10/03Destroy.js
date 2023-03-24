//Here is an array and some arguments passed on destroyer fuction
//we have to return the array of elements that does not contains arguments

function destroyer(arr,...arg) {
   let newArr
    console.log(arr)
     newArr = arr.filter((element)=>{
      return !arg.includes(element)
    })
    return newArr
    
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));