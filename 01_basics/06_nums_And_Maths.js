const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8946

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// *********************** Maths *****************************

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); //4 neg to pos
console.log(Math.round(4.3));// 4
console.log(Math.ceil(4.2)); 
console.log(floor(4.9));
console.log(Math.min(2, 5, 6, 3));
console.log(Math.max(2, 5, 6, 3));

console.log(Math.random());
console.log(Math.floor(Math.random()*10) + 1);

const min = 10 
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min );








