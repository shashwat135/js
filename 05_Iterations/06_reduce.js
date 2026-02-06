//reduce

const myNums = [1,2,3]

const myTotal = myNums.reduce((acc,currVal) => {
    console.log(`Accumulator : ${acc} CurrentVal : ${currVal}`)
    return acc + currVal
},5)
console.log(myTotal)

const total = myNums.reduce((acc,currVal) => acc+currVal,5)
console.log(total)


const shoppingCart = [
    {
        productName : "Shampoo",
        price : 499
    },

     {
        productName : "badminton Rackets",
        price : 1499
    },

     {
        productName : "The monk who sold his ferrari",
        price : 299
    },

     {
        productName : "An autobiography of an yogi",
        price : 199
    }
]

const totalPriceToPay = shoppingCart.reduce((acc,item) => acc+item.price,0) 
console.log(totalPriceToPay)            //2496