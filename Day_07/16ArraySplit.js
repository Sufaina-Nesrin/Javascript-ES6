//Write a function that splits an array (first argument) into groups the length of size 
//(second argument) and returns them as a two-dimensional array.
//chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

function chunkArrayInGroups(arr, size) {
  
    const newArr = [];
    let i = 0;
  
    while (i < arr.length) {
      newArr.push(arr.slice(i, i + size));
      i += size;
    }
    return newArr;
  }
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));