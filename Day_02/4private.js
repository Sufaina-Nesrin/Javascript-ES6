//Protected properties are usually prefixed with an underscore _.

//That is not enforced on the language level, 
//but there’s a well-known convention between programmers that such properties and methods
// should not be accessed from the outside.

//So our property will be called _waterAmount:

class CoffeeMachine {
    _waterAmount = 0

    set waterAmount (value) {
        if(value < 0){
            value = 0;
        }
        this._waterAmount = value;
    }

    get waterAmount (){
        return this._waterAmount
    }
}

const coffeeMachine = new CoffeeMachine()
coffeeMachine.waterAmount = -7;
console.log(coffeeMachine.waterAmount);//consoles 0 not -7 ,because we have defined that wheenver the value gets lesser than 0 ,then the value should be zero

//.......................................................................................................................................................................
//let's check another example

//For power property, let’s make it read-only.
// It sometimes happens that a property must be set at creation time only, and then never modified.

//That’s exactly the case for a coffee machine: power never changes.

//To do so, we only need to make getter, but not the setter:


class CoffeeMachinE {
    // ...
  
    constructor(power) {
      this._power = power;
    }
  
    get power() {
      return this._power;
    }
  
  }
  
  // create the coffee machine
  const coffeEMachine = new CoffeeMachinE(100);
  
  console.log(`Power is: ${coffeEMachine.power}W`); // Power is: 100W
  
  coffeEMachine.power = 25; 
  console.log(coffeEMachine.power);// its never change it always shows 100