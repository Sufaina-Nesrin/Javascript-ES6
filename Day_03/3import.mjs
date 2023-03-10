import * as math_functions from './1export.mjs';

//the above import statement will create an object called math_functions. This is just a variable name, 
//you can name it anything. The object will contain all of the exports from 1export.mjs in it,
// so you can access the functions like you would any other object property.
// Here's how you can use the add and subtract functions that were imported:

const result = math_functions.add(3, 4);
const result1 = math_functions.subtract(6 ,2);

console.log(`result : ${result} and resulte1 : ${result1}`)// consoles, result : 7 and resulte1 : 4