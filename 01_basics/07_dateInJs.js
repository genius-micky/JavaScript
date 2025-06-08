// Dates

let myDate = new Date()
console.log(`1 ` + myDate);

console.log(`2 ` + myDate.toString());
console.log(`3 ` + myDate.toDateString());
console.log(`4 ` + myDate.toISOString());
console.log(`5 ` + myDate.toJSON());
console.log(`6 ` + myDate.toLocaleDateString());
console.log(`7 ` + myDate.toLocaleString());
console.log(`8 ` + myDate.toLocaleTimeString());
console.log(`9 ` + myDate.toTimeString());
console.log(`10 ` + myDate.getTimezoneOffset());
console.log(`11 ` + myDate.toUTCString());

console.log(typeof myDate)

// declare date

let myCreatedDate = new Date(2026, 0, 28, 12, 0)
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // convert to seconds 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate);
console.log(newDate.getMonth);


newDate.toLocaleString('default', {
    weekday: "long",
    
})


