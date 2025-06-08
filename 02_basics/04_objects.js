// with the helps of constructor, singleton

// const tinderUser = new Object() // singleton Object

const tinderUser = {} //  non singleton object

tinderUser.id = "123abc"
tinderUser.name = "mickey"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstname: "harsh",
            lastname: "tandan"
        }
    }
}

// console.log(regularUser.fullname.userFullName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
     {
        id: 1,
        email: "h@gmail.com"
    },
     {
        id: 1,
        email: "h@gmail.com"
    },

]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // creates array inside array.

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// destructuring

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "mickey"
}

// course.courseInstructor 
// anoter way to access using destructring 
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

const navbar = ({company}) => {

}
navbar(company = "mickey")

// API's concept
// apna kaam kisi or ke sir pe daldo
//Json
// {
//     name: "mickey",
//     coursename: "js in hindi",
//     price: "free"
// } 

// api in arary format
[
    {},
    {},
    {}
]


