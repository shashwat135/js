 //scope in js

 if(true){
    let a = 100
    const b = 200
    var c = 500
 }

//  console.log(a)         //will cause error
//  console.log(b)         //will cause error 
//  console.log(c)         //will "not" cause error     as var does not follow scope priciple and hence we avoid using var


let d = 100                 //global scope
if(true){
    let d = 500
    // console.log(d)          //500
}
// console.log(d)              //100


//nested scope 

function one(){
    const name = "Shashwat"
    function two(){
        const value  = 5000
        console.log(name)               //name is within the scope here
    }
    // console.log(value)               //gives error as value is out of scope here      
    two()                               //print name withour error
}
// one()


//++++++++++++++++++++++ interesting ++++++++++++++++++++++++

console.log(addOne(5))          //no error
function addOne(num){
    return num+1
}

// console.log(two(6))          //gives error 
const two = function(num){
    return num+2
}
console.log(two(6))