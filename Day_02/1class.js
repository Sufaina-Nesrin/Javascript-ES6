//ES6 provides a new syntax to create objects, using the class keyword.

//In ES5, an object can be created by defining a constructor function and using the new keyword to instantiate the object.

//In ES6, a class declaration has a constructor method that is invoked with the new keyword. 
//If the constructor method is not explicitly(defined by programmer) defined, then it is implicitly(automatically defined) defined with no arguments.


// Explicit constructor
class SpaceShuttle{
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet
    }
    takeOff(){
        console.log("To "+this.targetPlanet+ "!")
    }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

//..........................................................................................................................................................
//Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.


// Implicit constructor 
class Rocket{
    launch(){
        console.log("To The Moon!");
    }
}

const atlas = new Rocket();
//prints To The Moon!
atlas.launch();