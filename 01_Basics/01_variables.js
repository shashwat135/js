const accountId = 12223
let accountEmail = "shashwatpandey2121@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
 
console.table([accountId , accountEmail , accountPassword , accountCity])

accountEmail = "sp@gmail.com"
accountPassword = "14568"
accountCity = "Kanpur"

let accountState;
console.table([accountId , accountEmail , accountPassword , accountCity , accountState])

/*
 Prefer not to use "var" as issues related to block scope and functional scope 
*/