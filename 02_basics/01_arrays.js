// array

const myArr = [0, 1, 2, 3, 4, 5]
const myheros = ["ironman", "Flash", "Batman"]

const myArr2 = new Array(1, 2, 3, 4, 5)
console.log(myArr[1]);


// JS arrays are resizable

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.index(9));

const newArr = myArr.join()


console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// Slice, Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);


/*
The key difference between slice and splice is 

#In slice the original array is not manipulated.
#In Splice the original array get manipulated. 
*/



