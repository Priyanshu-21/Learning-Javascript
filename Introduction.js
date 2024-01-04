// Introduction to variable scoping in js 
/*
let firstName = "Priyanshu";
// In the let variable the scope of the variable is block
if (firstName == "Priyanshu") {
    let firstName = "Priyanshi";
    console.log(firstName);     // print the value which is in local scope 
}

console.log(firstName); // print value which is in global scope (Priyanshu)



var lastName = "Mishra";

if(lastName == "Mishra") {
    var lastName = "Sharma";
}

// calling variable which is inside block statement
console.log(lastName);  // variable changed to 'Sharma'
*/
/*
! Imp :- const variable always need value initialized
! for let and var : uninitialized variable --> will undefined in program 
*/ 
var defineVariable;
console.log(defineVariable);

defineVariable = 20;

console.log(defineVariable);