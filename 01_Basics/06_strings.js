const myName = "Shashwat "      //primitive string 
const age = 21
//console.log(myName + "age " + age)            //not the best way to do it in modern times

console.log(`Hello my name is ${myName} and my age is ${age}`)

const newName = new String("Rahul")     //way to initialise string object . This creates a string object 

console.log(typeof myName)          //string
console.log(typeof newName)         //object(string object)

console.log(newName.toUpperCase())
console.log(newName)

console.log(myName.charAt(0))
console.log(newName.indexOf('u'))
console.log(myName.substring(0,4))

console.log(myName.slice(-4,-1))        //negative index start from end with -1,-2,....

const newStringOne = "     Shashwat..    "
console.log(newStringOne)
console.log(newStringOne.trim())        //remove whitespaces froms start and end of the string

const url = "www.google.com"
console.log(url)
console.log(url.replace("oog","opt"))           //"www.goptle.com"
console.log(url.includes("google"))
console.log(url.includes("goole"))

let myString = "apple-mango-grapes-banana"
let myString2 = "apple"
console.log(myString.split('-'))        //[ 'apple', 'mango', 'grapes', 'banana' ]
console.log(myString2.split(''))        //[ 'a', 'p', 'p', 'l', 'e' ]
console.log(myString2.split())          //apple
console.log(myString.split('-',2))      //[ 'apple', 'mango' ] split with limit
