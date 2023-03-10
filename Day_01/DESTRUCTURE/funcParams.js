

const profile = (obj)=>{
console.log(`name:${obj.name} age:${obj.age} place:${obj.place}`)
}

const obj={
    name:"Martha",
    age:24,
    place:"Manchester"
}

profile(obj);
//....................................................................................................




//we can rewrite this code my destructuring the object argument in a simpler way,here is the code...

const Profile = ({name, age, place})=>{
    console.log(`name:${name} age:${age} place:${place}`)//here we donot have to repeat the obj.in multiple times
}
//we can alo destructure the instances that only needs like
//const Profile ({name})=>.......so on

Profile(obj);