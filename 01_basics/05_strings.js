const name = " mickey "
const repoCount = 50 

// console.log(name + repoCount + " Value"); // outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('mickey-singh')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length); //6
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // c
// console.log(gameName.indexOf(k)); // 3

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   mickey   "
console.log(newString);
console.log(newString.trim());

const url = "https://mickey.com/mickey%20singh"

url.replace('%20', '-')

console.log(url.includes('mickey'));

console.log(gameName.split('-'));


