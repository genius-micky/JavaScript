const accountId = 144553 //can not be changed
let accountEmail = "mickey@gmail.com"
var accountPassword = "12345"
accountCity = "Raipur"

let accountState; // undifined

// accountId = 2 // not allowed

accountEmail = "hc@gmail.com"
accountPassword = "25432"
accountCity = "Chandigarh"

console.log(accountId);

 console.table([accountId, accountEmail, accountPassword, accountCity])


 /*
prefer not to use var
because of issue in block scope and functional scope 
 */