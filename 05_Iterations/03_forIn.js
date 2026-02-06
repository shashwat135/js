//iteration on object

const myObj = {
    Vehicle : 'Truck',
    Utensil : 'Glass',
    Furniture : 'Table'
}

// for (const key of myObj) {                  //Error : myObj is not iterable
//     console.log(key)
// }

for (const key in myObj) {
    console.log(key)                //prints all the keys
}

for (const key in myObj) {
    console.log(`An item of type ${key} is ${myObj[key]}`)
}

