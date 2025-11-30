const num = 100

const balance = new Number(100)

// console.log(num)            //100
// console.log(balance)        //[Number: 100]

// console.log(balance.toString())                 //100
// console.log(balance.toString().length)          //3

// console.log(balance.toFixed(2))             //100.00
let balance2 = new Number(100.2368)         
// console.log(balance2.toFixed(2))            //100.24

// console.log(num.toPrecision(4))             //100.0
// console.log(num.toPrecision(2))             //1.0e+2

const hundreds = 10000000
//console.log(hundreds.toLocaleString())              //1,00,00,000
//console.log(hundreds.toLocaleString('en-US'))       //10,000,000
// console.log(Intl.DateTimeFormat().resolvedOptions().locale);            //en-IN



//++++++++++++++++++++++++MATH++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

console.log(Math)           //Object [Math] {} it is an object
// console.log(Math.abs(-4))       //4
// console.log(Math.abs(4))        //4
        
// console.log(Math.round(4.6))        //5
// console.log(Math.round(4.5))        //5
// console.log(Math.round(4.4))        //4
// console.log(Math.ceil(4.4))             //5
// console.log(Math.floor(4.7))            //4

// console.log(Math.min(4,2,8,9,10))       //2
// console.log(Math.max(4,2,8,9,10))       //10

// console.log(Math.random())          //gives a random value between 0 and 1
// console.log((Math.random()*10)+1)
// console.log(Math.floor((Math.random()*10)+1))

let min = 1
let max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min)      //standard formula to generate a random integer between a min and max (both included)






