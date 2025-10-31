// immediately Invoked function Expressions (IIFE)

function one(){ // normal function declaration // hoisting 
    console.log('DB CONNECTED'); // function body // function definition // function implementation 
}
one(); // function call // function invocation

(function one1(){ // IIFE function expression // anonymous function expression
    console.log('DB CONNECTED'); // function body // function definition // function implementation // function expression
})(); // function call // function invocation // IIFE call // IIFE invocation // function wrapping/unwrapping

(() => { // IIFE arrow function expression // anonymous arrow function expression // arrow function expression // arrow function definition
    console.log('DB CONNECTED TWO'); // function body // function definition // function implementation // function expression
})(); // function call // function invocation // IIFE call // IIFE invocation // function wrapping/unwrapping

(function two() { 
    // named IIFE
    console.log(`DB CONNECTED TWO`); // function body // function definition // function implementation // function expression
})(); // function call // function invocation // IIFE call // IIFE invocation // function wrapping/unwrapping


((name) => { // IIFE arrow function expression with parameter // anonymous arrow function expression with parameter // arrow function expression with parameter // arrow function definition with parameter // IIFE with parameter
     // function parameter // function argument // function input 
    console.log(`DB CONNECTED TWO ${name}`); // function body // function definition // function implementation // function expression
    // console.log('DB CONNECTED TWO ' + name); // function body // function definition // function implementation // function expression
})("dharmy") // function call // function invocation // IIFE call // IIFE invocation // function wrapping/unwrapping // argument passing
// IIFE with argument passing