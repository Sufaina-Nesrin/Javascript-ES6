function titleCase(str) {
    let arr = str.split(" ")//[ "I'm", 'a', 'little', 'tea', 'pot' ]
    for (let i=0; i<arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()
        //arr[i].char(0) returns the first letter of the ith string element in the array and makes it to upper case
        //arr[i].slice(1) destructure the characters starts from the 1 to rest of them in the string and changes into 
        //lowe case, after all concatinate both of them and assign the value to arr[i]
    }
    return arr.join(" ");//to join each substring to a single string 
  }
  
  console.log(titleCase("I'm a little tea pot"));
  //console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));


  //Using Regular Expression

  function ChangeCase (str){
  return str.toLowerCase().replace(/(^|\s)\S/g, l =>l.toUpperCase())
  //here the regular expression selects the letter after the space and first of the string globally
  //inside replace function there should be two arguments 1 for the element to change another is the how to change
  //or the change ,here the first argument is regular expression means the first letter of every substring
  //and the second argument is arrow func,it defines a letter to uppercase 
  //in total the from the string ,the first letter of every string is replacing by capital of that letter

  }
  console.log(ChangeCase("HERE IS MY HANDLE HERE IS MY SPOUT"))