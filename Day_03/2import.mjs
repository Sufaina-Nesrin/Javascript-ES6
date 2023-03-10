import {add } from './1export.mjs'


//Here, import will find add in 1export.mjs, import just that function for you to use,
// and ignore the rest. The ./ tells the import to look for the 1export.mjs file in the same
// folder as the current file. The relative file path (./) and file extension (.mjs) are required when using
// import in this way.

console.log(add(1,4))//consoles 5