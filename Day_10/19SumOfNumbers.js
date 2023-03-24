//Create a function that sums two arguments together. If only one argument is provided, 
//then return a function that expects one argument and returns the sum.

//For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

function addTogether() {
    console.log(arguments.length)
    for(let i=0; i<arguments.length; i++){
        if(typeof(arguments[i])!=='number'){
            return 'undefined';
    }
  }
  if(arguments.length===2){
    return arguments[0]+arguments[1];
  }else if(arguments.length===1){
    const a = arguments[0]
    return function (b){
        if(typeof(b)==='number'){
            return a+b;
        }else{
            return 'undefined'
        }
    }

  }

  
}
  
console.log( addTogether(2)(3)) ;