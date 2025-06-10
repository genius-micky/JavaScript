const user = {
    username: "mickey",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
        // "this" refers to current context.
    }

}
// user.welcomeMessage()
// user.username = "sam" // Context/value changed
// user.welcomeMessage()

// console.log(this); // node environment refers to empyt object

// whereas in browser we see window 
// when engine run in browser, the global object is window object, and because of that reason we are able to capture all events like click, form submit. 

// function chai() {
//     let username = "mickey"
//     console.log(this); // we cannot user this.username inside function
    
// }

// chai()

// const chai = function () {
//     let username = "mickey"
//     console.log(this.username);

// same error as embove 
    
// }

// chai()

const chai = () => {
    let username = "mickey"
    console.log(this.username);
    //undefined

    console.log(this);
    // {}
}

// chai()

// Arrow fucntion

// () => {} // syntax
// explicit return
    // const addTwo (num1, num2) => {
    //     return num1 + num2
    // }
    // console.log(addTwo(2, 4));

//  Implicit return
//    const addTwo = (num1, num2) =>  num1 + num2
   
// const addTwo = (num1, num2) =>  (num1 + num2) // mostly used in react

// return object
const addTwo = (num1, num2) =>  ({username: "mickey"})
    
    console.log(addTwo(2, 4));j
// one line statement // no need to  write return

const myArray = [2, 4, 5, 3, 7, 8]

// myArray.forEach()