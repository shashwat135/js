//functions

function addTwoNumber(number1, number2){
 console.log(number1+number2)   
}

// addTwoNumber(7,3)       //10
// const result  = addTwoNumber(8 , 6)
// console.log("Result : ", result )           //undefined

function addTwoNumber2(number1, number2){
 const result1 = number1+number2
 return result1
}

// console.log("result1 : ", addTwoNumber2(5,5))       //result1 :  10


function loginMessage(username){
    return (`${username} just logged in`)
}

// console.log(loginMessage("Shashwat"))           //Shashwat just logged in

//  console.log(loginMessage())            //undefined just logged in


 function loginMessage2(username){
    if(!username){
        console.log("Please enter a username")
        return
    }
    console.log(`${username} just logged in`)
}
// loginMessage2()     //Please enter a username
// loginMessage2("Shashwat")


function loginMessage3(username="shak"){            //here "shak" is the default value if nothing is passed 
    console.log(`${username} just logged in`)
}
// loginMessage3()                 //shak just logged in
// loginMessage3("Shashwat")       //Shashwat just logged in

function calculateCartPrice(...num){            //rest paramenter syntax
    return num
}

// console.log(calculateCartPrice(100))                        //[ 100 ]
// console.log(calculateCartPrice(100,200,500,1000))           //[ 100, 200, 500, 1000 ]

//Passing object to a function
const object = {
    name : "Laptop",
    price : 50000
}

function handleObject(anyObject){
    console.log(`Object name is ${anyObject.name} and its price is ${anyObject.price}`)
}

// handleObject(object)            //Object name is Laptop and its price is 50000


//Passing Array to a function
const prices = [500,1000,1500,2000]

function returnSecondValue(prices){
    return prices[1]
}
console.log(returnSecondValue(prices))