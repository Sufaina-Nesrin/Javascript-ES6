import subtraction from './4defaultExport.mjs'//default export
import { add } from './4defaultExport.mjs'// named export

console.log(subtraction(10 , 5))//consoles 5
console.log(add(10 , 5)) // consoles 15



//The syntax differs in one key place. The imported value, subtraction, is not surrounded by curly braces ({}). 
//subtraction here is simply a variable name for whatever the default export of the 4export.mjs file is.
// You can use any name here when importing a default.