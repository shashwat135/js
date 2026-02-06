// const tinderUser = {}
// tinderUser.user = "sam123"
// tinderUser.name = "Shak"
// tinderUser.isLoggedIn = false

//console.log(tinderUser)         //{ user: 'sam123', name: 'Shak', isLoggedIn: false }

const regularUser = {
    email : "shashwat@google.com",
    fullName : {
        userName : {
            firstName : "Shashwat",
            LastName : "Pandey"
        }
    }
}
// console.log(regularUser.fullName)                    //{ userName: { firstName: 'Shashwat', LastName: 'Pandey' } }
// console.log(regularUser.fullName.userName.firstName)        //Shashwat

const target = {1 : 'a' , 2 : 'b'}
const source1 = {3 : 'c', 4 : 'd'}
const source2 = {5 : 'e', 6 : 'f'}

//console.log({target,source1})       //{ target: { '1': 'a', '2': 'b' }, source1: { '3': 'c', '4': 'd' } }

const returnTarget = Object.assign(target,source1,source2)
//.log(returnTarget)           //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// console.log(target===returnTarget)          //true : as the target array is the one that is modified 

const target1 = {1 : 'a' , 2 : 'b'}
const source4 = {3 : 'c', 4 : 'd'}
const source5 = {5 : 'e', 6 : 'f'}
const newTarget = Object.assign({},target1,source4,source5)
// console.log(newTarget)
// console.log(target1===newTarget)        //false : as all objects are merged in the new empty object passed 

// console.log({...target,...source1,...source2})          //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }    
//... ->spread

// console.log(Object.keys(tinderUser))        //[ 'user', 'name', 'isLoggedIn' ] return an array of keys of the object
// console.log(Object.values(tinderUser))      //[ 'sam123', 'Shak', false ]      return an array of value of the object

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))        //checks whether that property is present in object or not


// Destructuring of Js objects
const employee = {
    name : "Shashwat",
    companyName : "Google",
    age : 21
}

const {name , companyName , age } = employee            //destructuring 

console.log(age)            //no need to write emplyee.age again and again


// {                           //close to json format use to exchange data between servers. used in apis
//     "name" : "Shashwat",
//     "age" : 21,
//     "height" : "176cm"
// }

// [
//     {},
//     {},
//     {}
// ]

