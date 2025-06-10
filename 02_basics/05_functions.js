

// function sayMyName(){
// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");

// }

// sayMyName // refernce

// sayMyName() // execution

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){
   
    // let result = number1 + number2
    // return result
   
    return number1 + number2
}

const result = addTwoNumbers(1, 4)
// console.log("result:", result);

function loginUserMessage(username = "Sam"){
    if (!username) {
        console.log("Please enter username");
        return
        
    }
    return `${username} just logged in` 
}

console.log(loginUserMessage("Mickey")); 


function calculateCartPrice(...nume1) {
    return nume1
}

// console.log(calculateCartPrice(200, 400, 500)); //array

const user = {
    username: "mickey",
    prices: 199

}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Harsh",
    price: 299
})

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 600]));

