//Array.prototype.sort()
//sorting array to make alphhabetical order by using sort method
function alphabeticalOrder (arr){
  let sortedArray = arr.sort((a,b)=>{
    return a===b? 0:a<b?-1:1;
  })
  return sortedArray
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

//---------------------------------------------------------------------------------------------------
//A side effect of the sort method is that it changes the order of the elements in the original array.

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
let newArray = [...arr]
newArray.sort((a,b)=>{
  return a===b?0:a<b?-1:1
})
return newArray

}
console.log(nonMutatingSort(globalArray));

//here is the brief describtion about sort

//The sorting is done using the Array.prototype.sort() method, which takes a compare function as an argument. 
//The compare function is used to determine the sorting order of the elements in the array.

//In this case, the compare function compares two elements a and b of the array using a ternary operator.
// If a and b are equal (a === b), the function returns 0, which indicates that the elements are equal 
//and their order doesn't matter. If a is less than b (a < b), the function returns -1, 
//which indicates that a should be sorted before b. If a is greater than b (a > b), 
//the function returns 1, which indicates that b should be sorted before a