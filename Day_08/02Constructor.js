//Constructors are functions that create new objects. 
//They define properties and behaviors that will belong to the new object. T
//hink of them as a blueprint for the creation of new objects.

function Bird(){ //use capital letters
    this.name = 'Albert';
    this.color = 'blue'
    this.numLegs = 2;
}
//Constructors define properties and behaviors instead of returning a value as other functions might.
let blueBird = new Bird() //creating an object
blueBird.name //calling a object property


function Dog(name,color){ //passing parameter to the constructor
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog('Oreo','black');
terrier.name //return Oreo

//Anytime a constructor function creates a new object, that object is said 
//to be an instance of its constructor
terrier instanceof Dog //returns true

//There is a special constructor property located on the object instances
console.log(terrier.constructor===Dog) //returns true

//name,color and numLegs are called own properties, because they are defined 
//directly on the instance object.
//In fact every instance of Bird or Dog will have its own copy of these properties. 

//checking whether its own property or not
console.log(terrier.hasOwnProperty('color')); //use the variable in quotes