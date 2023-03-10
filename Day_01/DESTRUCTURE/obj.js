
const user = {
    name : "Hugo",
    age : 15,
    place :"Washington DC"
}

//the traditional way to print the name and age is ....
console.log(user.name,user.age,user.place); //it consoles Hugo 15 Washington DC

//...................................................................................................................

//Destructuring assignment is special syntax introduced in ES6,
// for neatly assigning values taken directly from an object.


const {name, age, place} = user
console.log(name,age,place)//it also consoles Hugo 15 Washington DC


//Here, the name and age variables will be created and assigned the values of their respective values
// from the user object. You can see how much cleaner this is.

//You can extract as many or few values from the object as you want.
