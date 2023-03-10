
class CoffeeMachine {
  waterAmount = 0; // the amount of water inside

  constructor(power) {
    this.power = power;
   
  }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = 200;
console.log(coffeeMachine.waterAmount,coffeeMachine.power);

// Right now the properties waterAmount and power are public. We can easily get/set them from the outside to any value.

// Let’s change waterAmount property to protected to have more control over it. For instance,
// we don’t want anyone to set it below zero
//check the 4private.js--------->