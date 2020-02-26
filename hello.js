const sayHello  = function (name) {
  console.log("Hello, " + name);
}

sayHello("Jebs");

//Console Log
const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 

//Return
const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');