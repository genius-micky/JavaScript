// Primitve
 /*
  7 types : String, Number, Boolean, null, undefined, symbols, bigint
 */

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

const bigNumber = 234324432322343n


// Reference (Non primitve)
 /*
 Array, Objects, Functions 
 */

 const heros = ["shaktiman", "ironman", "Flash"]

 let myObj = {
    name: "mickey", 
    age: 22,

 }

 const myFunction = function () {
    console.log(" hello world ");
    
 }

 console.log(typeof bigNumber);
 