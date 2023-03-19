//Here we have an array contains some real numbers
//we want to return an array of squares of positive integers

const squareList = arr => {
    
   let array= arr.filter((numbers)=>{
       return numbers > 0 && Number.isInteger(numbers) //filtring positive integers
    })
    .map((num)=>{
        return num*num //making its squares
    })
    return array;
    
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);

  