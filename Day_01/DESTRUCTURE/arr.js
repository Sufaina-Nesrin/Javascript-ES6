const arr = [1,2,3,4,5];
const [a,b] = [1,2,3,4,5];

console.log(a,b);//here 1 assigns to a and 2 to b;


//here we have 3 variable e,f,g from the arr the value of e should be 1,f should be 3 and g should be 5
const [e,,f,,g] = arr
console.log(e,f,g);
//here we used commas to the empty or unusal spaces.right?



//the how to swap values using destructure
let val1=6, val2=8;
[val1, val2] =[val2 ,val1];
console.log(`val1-${val1} val2-${val2}`)//consoles val1-8 val2-6



//In some situations involving array destructuring,
// we might want to collect the rest of the elements into a separate array.
const arr2 = [1,2,3,4,5];
const [i,h,...list] = arr2;
console.log(list);//consoles an array of values [ 3, 4, 5 ];