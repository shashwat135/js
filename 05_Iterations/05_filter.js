
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const num = myNums.forEach((item) => {
//     console.log(item)
//     return item
// })

// console.log(num)                //undefined


//filter

const num = myNums.filter((value) => {
    return value>4
})
// console.log(num)                //[ 5, 6, 7, 8, 9, 10 ]

const num2 = myNums.filter((value) => value>5)
// console.log(num2)               //[ 6, 7, 8, 9, 10 ]

//if we want to do the same thing using foreach without using filter

const newNums =[]
myNums.forEach( (nums) => {
    if(nums>4) newNums.push(nums)
})

// console.log(newNums)


//
const books = [
  {
    name: "Dune",
    genre: "Science Fiction",
    publishingDate: 1965
  },
  {
    name: "Neuromancer",
    genre: "Science Fiction",
    publishingDate: 1984
  },
  {
    name: "The Silent Patient",
    genre: "Thriller",
    publishingDate: 2019
  },
  {
    name: "Gone Girl",
    genre: "Thriller",
    publishingDate: 2012
  },
  {
    name: "Atomic Habits",
    genre: "Self-Help",
    publishingDate: 2018
  },
  {
    name: "Deep Work",
    genre: "Self-Help",
    publishingDate: 2016
  },
  {
    name: "To Kill a Mockingbird",
    genre: "Classic",
    publishingDate: 1960
  },
  {
    name: "Pride and Prejudice",
    genre: "Classic",
    publishingDate: 1813
  }
];

const thriller = books.filter((bk) => bk.genre==='Thriller')
// console.log(thriller)

let latest = books.filter((lt) =>{ 
    return lt.publishingDate>=2000
})         //if scope opened return is required

// console.log(latest)


//.map
const nums = [1,2,3,4,5,6,7,8,9]
const add10 = nums.map((add) => {return add+10})
console.log(add10)          //[11, 12, 13, 14, 15,16, 17, 18, 19]

const newNum = nums.map((num) => num*10).map((num) => num+1)
console.log(newNum)         //11, 21, 31, 41, 51, 61, 71, 81, 91