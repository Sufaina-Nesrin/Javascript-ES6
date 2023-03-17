

function Bird(name,color){
    this.name = name;
    this.color = color;
}
//Bird.prototype.numLegs = 2,can add like this when we have one prop,but it is difficult when we more than one
Bird.prototype={
    constructor:Bird,//should include when manually setting the prototype to a new object. bcs It erases the constructor
    numLegs:2,
    eat:function(){
       console.log("nom, nom nom")
    },
      describe:function(){
      console.log("My name is "+this.name)
    }
  }
  

let duck = new Bird('psyduck','yellow')
console.log(duck.numLegs) //it works and returns 2
duck.describe()


//..........................................................................................................
//there are 2 kinds of properties: own properties and prototype properties.
// Own properties are defined directly on the object instance itself. 
// And prototype properties are defined on the prototype.

//To check own props and prototype props
//hasOwnProperty returns falsw on prototype properties

//let's do a fuction

function findOwnAndProto() {
    let ownProp = [];
    let protoProp = []
    for(let property in duck){
        if(duck.hasOwnProperty(property)){
           ownProp.push(property)
        }else{
            protoProp.push(property)
        }
    }
    return {ownProperties:ownProp,prototype:protoProp};
}
let result=findOwnAndProto()
console.log(result)
console.log(result.ownProperties[0]) //cosoles name


console.log(Object.prototype.isPrototypeOf(Bird.prototype));//returns true as we mentioned in the previous lesson




