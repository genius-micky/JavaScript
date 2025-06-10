
//{} // scopes when it comes with function or if-else

let a = 100

if (true) {
    let a = 10
const b = 20
var c = 30 // this will get print 
}

console.log(a); // 100
console.log(b);
console.log(c); // 30

// Nested sccope

function one(){
    const username = "mickey"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    console.log(website);
    
    two()
}
// one()

if (true) {
    const usernam = "mickey"
    if (username === "mickey") {
        const website = " youtube"
        // console.log(usernam + website);
        
    }
    // console.log(website); // error
    
}

// console.log(usernam); // error

// **************************** interesting *******************

function addOne(num) {
    return num + 1
}

addOne(5) // only gets returned not print

const addTwo = function(num) {
    return num + 2
}

addTwo(5)