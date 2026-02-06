//for each

const arr = ['mango', 'apple', 'grapes', 'banana']

arr.forEach(function(value){
    console.log(`The current value is ${value}`)
})

arr.forEach((value)=>{
    console.log(`The value is ${value}`)
})

function print(name){
    console.log(name)
}
arr.forEach(print)              //print all the fruit names


arr.forEach((value,index,arr) => {          //so the function has access to the value , index and also the complete array
    console.log(value,index,arr)
})

//iteration over a array containing objects
const newArr = [
    {
        language : 'java',
        fileName : 'java'
    },
    {
        language : 'javascript',
        fileName : 'js'
    },
    {
        language : 'python',
        fileName : 'py'
    }
]

newArr.forEach((obj) => {
    console.log(obj.language)
    console.log(obj.fileName)
})