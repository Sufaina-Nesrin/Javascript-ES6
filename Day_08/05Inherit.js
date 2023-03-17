function Bird(name,color){
 this.name = name;
 this.color = color;
 this.numLegs = 2;
}

function Dog(name,color){
 this.name = name;
 this.color = color;
 this.numlLegs = 4;
}


Bird.prototype = {
    constructor: Bird,
    // describe: function() {
    //   console.log("My name is " + this.name);
    // }
  };
  
  Dog.prototype = {
    constructor: Dog,
    // describe: function() {
    //   console.log("My name is " + this.name);
    //}
  };

  //Here the prototype of both dog and bird is common,then we can create a parent to make it DRY
  //and delete the properties from the children

  function Animal(){}

  Animal.prototype={
    constructor:Animal,
    describe: function() {
        console.log("My name is " + this.name);
    }
  }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
let duck = new Bird('alice','white') 
duck.describe()
console.log(Object.getPrototypeOf(duck)) ;// Animal {}
console.log(duck.constructor)// [Function: Animal]
//-----------------------------------------------------------------------------------------------------------
//we can change its respective constructors
Bird.prototype.constructor = Bird;//[Function: Bird]
Dog.prototype.constructor = Dog
console.log(duck.constructor)
console.log(Object.getPrototypeOf(duck))

//then we have to add methods that unique to birds after inheritence,obviously its added to the Bird.prototype
//here is the code
Bird.prototype.fly = function(){
    console.log("I am flying");
}
//then we can call both fly and describe
duck.fly()
duck.describe()
//---------------------------------------------------------------------------------------------------------
//Override Inherited Methods
//like we discussed in the chapter 03Prototype.txt
//when we ressign obje with an exisisting method in its parent,then obj.method() returns the method in the object
//if you feel discomfortable read the documentation provided in the 03Prototype.txt
//let's check an example

//here the parent Animal contains a method called describe ,we are going to create a new function in the 
//Bird.prototype with the same name

Bird.prototype.describe = function(){
    console.log('I am a '+this.color+' color bird')
}

duck.describe()//it consoles I am a white color bird not My name is Alice





  