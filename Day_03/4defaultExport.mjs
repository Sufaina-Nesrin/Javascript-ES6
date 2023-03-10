//There is another export syntax you need to know, known as export default. 
//Usually you will use this syntax if only one value is being exported from a file. 
//It is also used to create a fallback value for a file or module.

export const add = (x, y) => {
    return x + y;
  }
  
  export default (x, y)=> {
    return x - y;
  }

  //The first is a named function, and the second is an anonymous function.

  //Since export default is used to declare a fallback value for a module or file, 
  //you can only have one value be a default export in each module or file.
  // Additionally, you cannot use export default with var, let, or const