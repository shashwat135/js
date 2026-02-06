const user = {
        username : "Shashwat",
        price : 1000,
        welcomeMessage : function(){
            console.log(`${this.username}, welcome to our website`)
            // console.log(this)       //here the context is the user object and console.log will print user object
        }
}
// user.welcomeMessage()           //Shashwat, welcome to our website
// user.username  = "shak"         
//  user.welcomeMessage()           //shak, welcome to our website

// console.log(this)           //{}  current context is empty(here in node environment) here as we are in global space
                            // in browser console it will show it as "window"

const one = function(){
    let username = "shak"
    // console.log(this)                   //prints something large(global object)
    // console.log(this.username)          //undefined
}
one()

const two = () =>{
    let username = "shak"
    // console.log(this)               //{}  , Arrow function do not have their own this they borrow it from the parent scope      
    // console.log(this.username)      //undefined    
                                                    
}
two()

const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(5,7))

//const addTwo1 = (num1,num2) => num1 + num2  
const addTwo1 = (num1,num2) => (num1 + num2)        //no need to use return keyword if used paranthesis
console.log(addTwo1(8,7))

const addTwo2 = (num1,num2) => {username : "Shashwat"}
const addTwo3 = (num1,num2) => ({username : "Shashwat"})        //need to wrap object in paranthesis for returning

console.log(addTwo2(2,5))       //undefined
console.log(addTwo3(6,7))       //{ username: 'Shashwat' }