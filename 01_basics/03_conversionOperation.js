let score = "500abc"


console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(valueInNumber);

console.log(typeof valueInNumber);


// '33' => 33
// "33abc" => NaN (not a number)
// true => 1; false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

// 1 => true; 0 => false
// "" => false
// "mickey" => true 

let someNumber = 3

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ******************* Operations ***********

let value = 3
let negValue = -value 

console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);

let str1 = "hello"
let str2 = " mickey"

let str3 = str1 + str2
console.log(str3); // hello mickey

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); // 32

console.log(true); // true
console.log(+true); // 1
//console.log(true+); // error
console.log(+""); // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // dont write like this

let gameCounter = 100

gameCounter++; // preFix and PostFix

console.log(gameCounter); // 101











