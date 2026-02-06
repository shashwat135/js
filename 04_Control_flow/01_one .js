//if statement

const hasMinimumAge = true;
if(hasMinimumAge){
    //code
}

//comparison operators <,>,<=,>=,==(check only value),!=,===(checks both value and type),!==

// if(2=="2"){
//     console.log("Executed")         //prints executed
// }   
// if(2==="2"){
//     console.log("Executed2")        //does not print 
// }


//if with else 

 const temperature = 24
// if(temperature<=20){
//     console.log("Temperature less than or equals to 20")
// }else{
//     console.log("Temperature is greater than 20")
// }


//scope
const score = 200
// if(score>100){
//     const power = "dash"
//     console.log(`${power} power activated`)
// }
//   console.log(`${power} power activated`)        //will cause error as power is only availiable withing the if scope

// if(score>100) console.log("power is fly")


// if - else if - else 

// const balance = 350
// if(balance<300){
// console.log("Balace is less than 300")
// }else if(balance<400){
// console.log("Balace is less than 400")
// }else if(balance<500){
// console.log("Balace is less than 500")
// }else{
// console.log("Balace is greater than or equal to 500")
// }


const loggedInFormGoogle = false
const loggedInFromEmail = false
if(loggedInFormGoogle || loggedInFromEmail){
    console.log("User is logged in")
}
else{
    console.log("User cannot log in")
}