//At their most basic, objects are just collections of key-value pairs. 
//In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys).

//Add Key-Value Pairs to JavaScript Objects
let fruits = {
    apples : 13,
    oranges : 15,
    strawberries :7
}
fruits.bananas =5
fruits.dates = 4;
console.log(fruits);


//Modify an Object Nested Within an Object
let nestedObject = {
    id: 28802695164,
    date: 'December 31, 2016',
    data: {
      totalUsers: 99,
      online: 80,
      onlineStatus: {
        active: 67,
        away: 13,
        busy: 8
      }
    }
  };
  //here we have to change busy to 9
  nestedObject.data.onlineStatus.busy = 9;
  console.log(nestedObject);


  //Access Property Names with Bracket Notation.
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
   return foods[scannedItem]
    
  }
  console.log(checkInventory("apples"));
  //here is a fuction called checkInventory with a paramenter,when it calls it return obj[param]
  //and return the value of the particular key in the obect


  //Use the delete Keyword to Remove Object Properties
  delete foods.strawberries //delete the particular key-value from the object


  //Use the delete Keyword to Remove Object Properties
  //to check the object is there or not ,hasOwnProperty() method and the other uses the in keyword. 
  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
let result = users.hasOwnProperty('Alan')
console.log(result)// returns true
//another method
let answer = 'Alan' in users
console.log(answer)//returns true


//Iterate Through the Keys of an Object with a for...in Statement
const Users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  //for...in statement. For our Users object, this could look like
  for (let user in Users) {
    console.log(user);//consoles Alan Jeff Sarah
  }
  //here Users is the obj and the user is the property in that obj


  //Generate an Array of All Object Keys with Object.keys()
  //We can also generate an array which contains all the keys stored in an object with the Object.keys() method. 
  let computer = {
    type :'lenovo',
    os : 'windows',
    processor : 'i5',
    RAM :'8GB',
    color : 'grey'

  }

  let arrayOfObjects = Object.keys(computer)
  console.log(arrayOfObjects) //consoles  [ 'type', 'os', 'processor', 'RAM', 'color' ]