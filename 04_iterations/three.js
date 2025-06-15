// for of: array specific

// ["", "", "",]
// [{}, {}, {},]

const arr = [1, 2, 4, 5, 3]

for (const i of arr) {
    // console.log(i);
    
}

const greetings = "hello World!"
for (const num of greetings) {
    console.log(`each char is ${num}`);
    
}

// Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")


// console.log(map);

for (const [key, value] of map) {
    console.log(key), '-:', value;
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

// for (const [key, value]} of myObject) {
//     // console.log(key), '-:', value;// error
    
// }
