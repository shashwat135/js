//for of 
const arr = [1,2,3,4,5]
// for (const val of arr) {
//     console.log(val)
// }

const name = "Shashwat Pandey"
// for (const ch of name) {
//     console.log(`The letter is ${ch}`)
// }


//Map

const map = new Map()
map.set('India','New Delhi')
map.set('USA','Washington DC')
map.set('China','Beijing')

console.log(map.get('China'))

// console.log(map)

for (const [key,value] of map) {
    console.log(`The capital of ${key} is ${value}`)
}

