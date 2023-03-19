//we have already discussed about slice method in previous day right?
//point to be noted: it is non-inclusive means that the endpoint value is not included in a interval

//here is an example of slice
function sliceArray(anim, beginSlice, endSlice) {
    
  return anim.slice(beginSlice,endSlice)
    
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  console.log(sliceArray(inputAnim, 1, 3));

  //------------------------------------------------------------------------------------------------------------------
  //change the splice int the following code to slice

  function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.splice(3);
  
    // Only change code above this line
  }
  
  const inputCities = ["HELLO", "HI", "HOLA", "YOOO", "WHAT'S APP"];
  console.log(nonMutatingSplice(inputCities));//returns values of 0 to 3

//code in slice method
function sliceMethod(cities) {
    // Only change code below this line
    return cities.splice(0,3);//returns values of 0 to 3
  
    // Only change code above this line
  }
  
  const InputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  console.log(sliceMethod(InputCities));//returns vakues of 0 to 3

