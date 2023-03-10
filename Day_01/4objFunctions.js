
//When defining functions within objects in ES5, we have to use the keyword function as follows:

const person = {
    name : "Nova",
    age : 26,
    sayHello: function(){
        return "Hello "+this.name;
    }
}
console.log(person.sayHello());




//..............................................................................................................
//With ES6, you can remove the function keyword and colon altogether when defining functions in objects.
// Here's an example of this syntax:



const Person = {
    name : "Jenny",
    age : 26,
    sayBye(){
        return "Bye "+this.name;
    }

}
console.log(Person.sayBye())