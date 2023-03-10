
const sayHello = (name = "Unknown")=>{
console.log("Hello "+name);
}

sayHello("Jhon Doe");//it will console Hello Jhon Doe;
sayHello();//this will console Hello Unknown;