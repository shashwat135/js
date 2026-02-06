//Dates

let myDate = new Date()

console.log(myDate)
console.log(myDate.toString())              //Mon Dec 01 2025 10:06:14 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())          //Mon Dec 01 2025(todays date)
console.log(myDate.toLocaleString())        //1/12/2025, 10:06:14 am
console.log(myDate.toLocaleDateString())    //1/12/2025

console.log(typeof myDate)          //object

let myCreatedDate = new Date(2025, 11 , 1)          
console.log(myCreatedDate.toDateString())           //Mon Dec 01 2025

let myCreatedDate2 = new Date(2025, 11, 1, 13, 20)         
console.log(myCreatedDate2.toLocaleString())                 //1/12/2025, 1:20:00 pm

let myCreatedDate3 = new Date("2025-12-01")        
console.log(myCreatedDate3.toDateString())               //Mon Dec 01 2025

let myTimeStamp = Date.now()            //1764565131807(The number of milliseconds passed since 1 January 1970 (UTC).
                                        //This is called Unix Timestamp or Epoch Time.)
let myTimeStamp2 = Date.now()
console.log(myTimeStamp2 - myTimeStamp)         //0

console.log(myCreatedDate.getTime())            //1764527400000(fixed value as fixed date)
console.log(Math.floor(Date.now()/1000))         //for seconds       

let newDate = new Date()
console.log(newDate.toLocaleString('default',{          //Monday
    weekday : "long"
}))

console.log(newDate.toLocaleString('en-IN',{                //Monday, 1 December 2025 at 10:51:45 am
  weekday: "long",        // Monday, Tuesday…
  year: "numeric",        // 2025
  month: "long",          // November
  day: "numeric",         // 30
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}
))      
console.log(newDate.getDay())           //1(Monday) ex 0(sunday)