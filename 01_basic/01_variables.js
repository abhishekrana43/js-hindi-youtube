const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "delhi"

// accountId = 2 not alowed

accountEmail = "hc@hc.com"
accountPassword = "12245654"
accountCity = "gurgaon"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope

*/
console.table([accountId,accountEmail, accountPassword, accountCity, ])