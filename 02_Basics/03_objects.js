

// object literal

const sym = Symbol("key1")
const myObj = {
    name : "Shashwat",
    "fullName" : "Shashwat Pandey",
    [sym] : "mykey1",           //brackets are necessary to treat it as symbol otherwise it will be normal key value pair
    age : 21,
    location : "kanpur",
    isLoggedIn : "false",
    workProfile : ["Software Enginner", "Manager"] 
}
// console.log(myObj.name)
// // console.log(myObj[name])  //wrong format 
// console.log(myObj["name"])
// console.log(myObj.fullName)
// console.log(myObj["fullName"])
// console.log(myObj[sym])          //mykey1
// console.log(myObj.sym)          //undefined

// myObj.age = 18
// console.log(myObj.age)          //18
// Object.freeze(myObj)
// myObj.age = 19
// console.log(myObj.age)          //18(does not change)
// console.log(myObj)

myObj.greeting = function(){
    console.log("Happy Makar Sankranti")
}
console.log(myObj.greeting)            //[Function (anonymous)] //function is not executed only reference is returned
console.log(myObj.greeting())           // "Happy Makar Sankranti" and in next line undefined
myObj.greeting()                        //"Happy Makar Sankranti"

myObj.greeting1 = function(){
    console.log("Hello User")
}
myObj.greeting2 = function(){
    console.log(`Hello user,${this.name}`)
}

myObj.greeting1()           //Hello user
myObj.greeting2()           //Hello user,Shashwat