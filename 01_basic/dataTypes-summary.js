//Primitive dateTypes

//7 types: String, Number, Boolean, null, Undefined, Symbol, BigInt
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id== anotherId);


//Array, Objects, Function

const heros = ["shaktiman", "naagraj", "dogo"];
let myObj = {
    name: "Abhishek",
    age:22,
}
const myFunction = function(){
    console.log("Hello World");
}