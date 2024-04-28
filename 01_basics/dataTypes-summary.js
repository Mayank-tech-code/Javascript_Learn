// Primitives 

// 7 Types 
// String , Number , null , Boolean , undefined , Symbol , BigInt

// Reference Type ( Non Prmitives) Data Types

// Array , Objects , functions 


// ++++++++++++++++++++++++++++++++++++++++++
// Memeory 

// Stack(primitive) Copy, 
// Heap(Non - primitive) Reference 

let myName = "Mayank"

let anotherName = myName;

anotherName = "Agrawal"


console.log(myName)
console.log(anotherName);


let userOne = {
    name : "MAyank"
}

let userTwo = userOne

userTwo.name = "Agrawal"

console.log(userOne);
console.log(userTwo);