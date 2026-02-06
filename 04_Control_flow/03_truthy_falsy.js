const userEmail = "shashwatpandey2121@gmail.com"

if(userEmail){                      //due to non empty string is truthy value
    console.log("User got email")
}
else{
    console.log("User do not have email") 
}

//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, naN (all other values are truthy values)

//truthy values
//"0", 'false', " ", [], {}, fucntion(){}

// let userArray =[]
// if(!userArray.length){
//     console.log("Array is empty")
// }

// const object = {}
// if(Object.keys(object).length===0){
//     console.log("Object is empty")
// }


//Null Coalescing Operator

//const result = leftOperand ?? rightOperand;
//It returns the right-side value only if the left-side is null or undefined
//Otherwise, it returns the left-side value.

let score = undefined
console.log(score??0)           //0

score = null
console.log(score??0)           //0

// Ternary operator
// condition?? true : false

const price = 20
price<=10 ? console.log("price is less than or equal to 10") : console.log("price is greater than 10")