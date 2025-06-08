const marvel = ["Thor", "Ironamn", "Spiderman"]
const dc = ["superman", "Flash", "Batman"]

marvel.push(dc)


console.log(marvel);
console.log(marvel[3][1]);
 
const allHeros = marvel.concat(dc)
console.log(allHeros);

const allNewHeros = [...marvel, ...dc] // ... known as spread operators
console.log(allNewHeros);

const anotherArray = [1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);


console.log(Array.isArray("mickey"));// no 
// how to convert 
console.log(Array.from("mickey"));
console.log(Array.from({name: "mickey"}));// we have to define how we want the array from keys or values.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


