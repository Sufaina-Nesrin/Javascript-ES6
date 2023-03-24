function whatIsInAName(collection, source) {
    // Define an array to store the matching objects
    let arr = [];
    // Loop through each object in the collection
    for (let obj of collection) {
      // Define a variable to keep track of whether all key-value pairs match
      let allMatch = true;
      // Loop through each key in the source object
      for (let key in source) {
        // If the key doesn't exist in the current object or the value doesn't match, set allMatch to false
        if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
          allMatch = false;
        }
      }
      // If all key-value pairs match, add the object to the array
      if (allMatch) {
        arr.push(obj);
      }
    }
    return arr;
  }
  

let result = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
console.log(result)