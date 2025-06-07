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
