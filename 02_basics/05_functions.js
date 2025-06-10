

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



