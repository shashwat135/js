//array

const myArr = [1,2,3,4,5]
const heroes = ['Ironman', 'Spiderman', 'Thor']

console.log(myArr[0])

const newArr = new Array(3,4,5,6,7)
console.log(newArr[2])

//Array Methods

myArr.push(8)               //adds element in the array at last index
console.log(myArr)          //[ 1, 2, 3, 4, 5, 8 ]

myArr.pop()
console.log(myArr)          //[ 1, 2, 3, 4, 5 ]

myArr.unshift(9)                //adds one or more element at beginning of the array
console.log(myArr)              //[ 9, 1, 2, 3, 4, 5 ]

let val = myArr.shift()         //removes 0 index element and return it
console.log(myArr)              //[ 1, 2, 3, 4, 5 ]
console.log(val)                //9

console.log(myArr.includes(3))      //true
console.log(myArr.indexOf(15))      //-1(as not present)

const joinArr = myArr.join()
console.log(joinArr)                //1,2,3,4,5
console.log(typeof joinArr)         //string
console.log(myArr.join('-'))        //1-2-3-4-5   custom seperator can be given

console.log('A' , myArr)        //A [ 1, 2, 3, 4, 5 ]
let myn1 = myArr.slice(1,3)
console.log(myn1)               //[2, 3]    exclusive
console.log('B',myArr)          //B [ 1, 2, 3, 4, 5 ]

let myn2 = myArr.splice(1,3)
console.log('C',myArr)          //C [ 1, 5 ] splice changes original array and the sliced portion is taken out and only rest remains
console.log(myn2)               //[ 2, 3, 4 ]   inclusive
