const marvel = ["Ironman", "thor", "Spiderman"]
const dc = ["Flash","Spiderman","Batman"]

// marvel.push(dc)
// console.log(marvel)     //[ 'Ironman', 'thor', 'Spiderman', [ 'Flash', 'Spiderman', 'Batman' ] ]
// console.log(marvel[3][2])

// const allHeros = marvel.concat(dc)
// console.log(allHeros)       //[ 'Ironman', 'thor', 'Spiderman', 'Flash', 'Spiderman', 'Batman' ]

// const allHeros2 = [...marvel,...dc]         //more preferred comparison to concat
// console.log(allHeros2)      //[ 'Ironman', 'thor', 'Spiderman', 'Flash', 'Spiderman', 'Batman' ]

const arr = [1 , 2 , [3 , 4] , [5 , 6 , [7 , 8]]]

// const simplifiedArray = arr.flat(2)                     
// console.log(simplifiedArray)            //[
//                                         //   1, 2, 3, 4,
//                                         //   5, 6, 7, 8
//                                         // ]

console.log(Array.isArray("Shashwat"))      //false
console.log(Array.from("Shashwat"))         //[ 'S', 'h', 'a', 's', 'h', 'w', 'a', 't']

console.log(Array.from({name : "Shashwat"}))        //[]        //empty array // interesting case 

let val1 = 100
let val2 = 200
let val3 = 300

console.log(Array.of(val1,val2,val3))


