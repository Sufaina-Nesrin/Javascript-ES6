// The global variable
//Here we have an array called bookList contains following elements
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", 
"Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

//and also we have two fuctions add and remove 
//aim: we have to return new array in each fuction without mutating the global array
function add(bookName) {

 let newList = [...bookList,bookName];//copying existing array using spread operator and adding the new bookName
  return newList;
  
 
}


function remove(list,bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    return list.filter(book => book !== bookName);//filtering the book without the bookName specified from the bookList arr

  
    }
}
let result = add('Alice in boderland')
console.log(result)
console.log(remove(result,'On The Electrodynamics of Moving Bodies'))