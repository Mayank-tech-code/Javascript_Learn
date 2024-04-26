// Const cant be changed 
const accountId = 121
// accountId = 131 
console.log(accountId);  

// Block Scope Variable 
let accoutnEmail = "Agrawal@123"
accoutnEmail = "Mayank@123"
console.log(accoutnEmail)

// Not a scope Variable so dont use it (functional Scope)
var pass = "Gds@123"
pass = "gds@123"


accountCity = "Pune"
accountCity= "Burhanpur"

console.table([accoutnEmail , pass , accountCity]);


// Summary 

// const cant be changes 
// let is block scope
// var functional scope (dont use)