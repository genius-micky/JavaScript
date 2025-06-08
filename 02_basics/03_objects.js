// objects  can be declared by literal and one with constructor and singleton

//Objects literals 

// Object.create //constructor method

//symbol 

const mySym = Symbol("key1")

const JsUser = {
    name: "mickey",
    "full name": "Harsh Tandan",
    [mySym]: "myKey1",
    age: 22,
    location: "Raipur",
    email: "Mickey@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "Saturday"]
}

// how to access

console.log(JsUser.name); // not appropriate way

console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email = "harshtandan@gmail.com"
Object.freeze(JsUser)
JsUser.email = "mickey76@gmail.com"
console.log(JsUser);

JsUser.greeting = function () {
    console.log("hello JS User");
    
}

console.log(JsUser.greeting); // undefined
console.log(JsUser.greeting()); // error: not a function, object freeze comment it out, 

JsUser.greeting2 = function () {
    console.log(`hello JS User, ${this.name}`);
    
}

console.log(JsUser.greeting2())




