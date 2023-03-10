//Imagine a file called math_functions.js that contains several functions related to mathematical operations.
// One of them is stored in a variable, add, that takes in two numbers and returns their sum. 
//You want to use this function in several different JavaScript files. In order to share it with these other files,
//you first need to export it

export const add = (x, y) => {
    return x + y;
  }

//and we can also use it another way,


const subtract = (x , y) => {
    return x - y;
}

export {subtract}


//we ca export multiple functions at same time;

//export {subtract ,add}

//there will be a warning when you used to export this file using .js extension like this-->

//Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

//This warning message appears when you are trying to load an ES module in a Node.js environment that does not recognize ES modules by default. ES modules are a feature of modern JavaScript that allow you to organize and encapsulate code in separate modules with their own scope.

//To fix this warning, you need to tell Node.js that your code is an ES module by either setting the "type": "module" property in your package.json file or using the .mjs file extension for your module files.

//Here are the steps to fix the warning:

//Option 1: Set "type": "module" in package.json

//Option 2: Use .mjs file extension

//Rename your .js files to have a .mjs extension. For example, rename app.js to app.mjs.