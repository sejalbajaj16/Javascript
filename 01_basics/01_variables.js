//keyword memoryName = value
//2 methods to declare variables let and var

const accountId = 144553
var accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState  //undefined

//accountId = 2 //not allowed
accountEmail = "dfg@gmail.com"
accountPassword = "566779"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope. 
*/

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])