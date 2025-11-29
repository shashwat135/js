// Primitive
// 7 types : String , Number , boolean, undefined , null , symbol, bigInt

const num = 1000
const num2 = 100.3
const isLoggedIn = true
//const val;        // will give error as for const value req while declaration. const val = undefined is allowed 
let val;

const id = Symbol("123")
const anotherId = Symbol("123")
//console.log(id===anotherId)     //false
//console.log(id==anotherId)      //false


//Reference(Non- Primitive)
//arrays , Objects , functions

const heros = ["Ironman" , "Batman", "Deadpool" , "Spiderman", "Thor"]      //array

let myObj = {                   //object stores value in key - value pairs
    name : "Shashwat",      
    age : 21
}
// js objects can hold any type of data like primitves like number, another object , functions, arrays

const myfunction = function(){
    console.log("Hello World")
}

myfunction()

console.log(typeof myfunction)          //result -> function
console.log(typeof myObj)               //result -> object

const obj2 = {
    newf : function(){
        console.log("Hello")
    }
}
console.log(typeof obj2)

let bigNumber = 10000000000000n
console.log(typeof bigNumber)          //result -> bigint

console.log(typeof id)                  //result -> symbol